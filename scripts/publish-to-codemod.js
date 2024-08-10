import { Lang, parse } from "@ast-grep/napi";
import { spawn } from "node:child_process";
import {
    copyFileSync,
    existsSync,
    mkdirSync,
    readdirSync,
    statSync,
    writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";

const gitBaseUrl =
  "https://github.com/es-tooling/module-replacements-codemods/tree/main/codemods";

const arg = process.argv[2];

/**
 * @type {Record<string, string>}
 */
const entries = {};

const codemodsSourceDir = "./codemods";

if (arg === "--all") {
  const folders = readdirSync(codemodsSourceDir).filter((f) =>
    statSync(`${codemodsSourceDir}/${f}`).isDirectory()
  );

  for (const folder of folders) {
    entries[folder] = `${codemodsSourceDir}/${folder}/index.js`;
  }
} else {
  const codemodDir = `${codemodsSourceDir}/${arg}`;
  if (existsSync(codemodDir) && statSync(codemodDir).isDirectory()) {
    entries[arg] = `./${codemodDir}/index.js`;
  } else {
    console.error(`Codemod "${arg}" not found`);
    process.exit(1);
  }
}

const tmpDir = `${tmpdir()}/${Math.random().toString(36).substring(7)}`;
const codemodsDir = `${tmpDir}/codemods`;

// only files, no directoreis
const filesInSrc = readdirSync(codemodsSourceDir).filter((f) =>
  statSync(`./${codemodsSourceDir}/${f}`).isFile()
);

for (const codemod in entries) {
  const codemodOutDir = `${codemodsDir}/${codemod}`;
  mkdirSync(`${codemodOutDir}/src`, { recursive: true });

  for (const sharedFile of filesInSrc) {
    copyFileSync(
      `${codemodsSourceDir}/${sharedFile}`,
      `${codemodOutDir}/src/${sharedFile}`
    );
  }

  mkdirSync(`${codemodOutDir}/src/transform`, { recursive: true });

  const readmeSourceFile = `${codemodsSourceDir}/${codemod}/README.md`;
  if (existsSync(readmeSourceFile)) {
    copyFileSync(readmeSourceFile, `${codemodOutDir}/README.md`);
  }

  const indexJsContent = readFileSync(
    `${codemodsSourceDir}/${codemod}/index.js`,
    "utf-8"
  );

  const ast = parse(Lang.JavaScript, indexJsContent);
  const root = ast.root();
  const isJscodeshift = root.has("import $A from 'jscodeshift'");

  if (!isJscodeshift) {
    console.log(`Skipping codemod "${codemod}" as it does not use jscodeshift`);
    continue;
  }

  const transformFunctionMatches = root.find(
    "export default function(options) { return { name: $NAME, transform: ({ file }) =>  $FN_BODY  } }"
  );

  const exportDefaultMatches = root.find("export default $EXPORT");

  const transformFunctionBody = transformFunctionMatches?.getMatch("FN_BODY");

  let newSource = "";

  if (transformFunctionBody) {
    const transformFunction = `function transform(file, {jscodeshift}) ${transformFunctionBody.text()}`;
    const change = exportDefaultMatches?.getMatch("EXPORT")?.parent()?.replace(`
const options = {};
export default ${transformFunction}
`);

    if (!change) {
      console.log("no change could be applied");
      continue;
    }
    newSource = root.commitEdits([change]);
  } else {
    console.log("no transform function found");
    continue;
  }

  writeFileSync(`${codemodOutDir}/src/transform/index.js`, newSource);

  const codemodRc = {
    name: `@e18e/${codemod}`,
    version: "1.0.5",
    engine: "jscodeshift",
    private: false,
    arguments: [],
    entry: "./src/transform/index.js",
    meta: {
      tags: ["e18e", "module-replacement"],
      git: `${gitBaseUrl}/${codemod}`,
    },
  };

  writeFileSync(
    `${codemodOutDir}/.codemodrc.json`,
    JSON.stringify(codemodRc, null, 2)
  );

  console.log(`Codemod "${codemod}" bundled in ${codemodOutDir}`);

  const child = spawn("npx", ["codemod@latest", "publish"], {
    cwd: codemodOutDir,
    stdio: "pipe",
  });

  /** @type {Promise<void>} */
  const promise = new Promise((resolve, reject) => {
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });

  child.stdout.on("data", (data) => {
    if (data.toString().includes("git")) {
      child.stdin.write("\n");
    }

    if (data.toString().includes("namespaces")) {
      // press arrow up and enter
      child.stdin.write("\x1b\x5b\x41\n");
    }
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  await promise;
}
