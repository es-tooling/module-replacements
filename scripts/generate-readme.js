import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";

/**
 * @param {string} code
 * @returns {string}
 */
const makePrompt = (
  code
) => `I have a set of jscodeshift codemods designed to replace inefficient or unnecessary npm modules with alternative packages or built-in ES features. Your task is to write a markdown description for each of these codemods. The markdown should follow this format:

1. **Introduction**: A brief description of what the codemod does. The ultimate goal is to reduce unnecessary dependencies and bundle size, and improve the performance of the codebase.
2. **Example**:
   - **Before**: Show an example of the code before applying the codemod.
   - **After**: Show an example of the code after applying the codemod.

Please ensure that the descriptions are clear, concise, and informative.

---

Here's an example to illustrate the format:

# Example Codemod

## Introduction

This codemod replaces the use of the \`exampleModule\` with a more efficient alternative. It updates the import statements and any corresponding usage within the codebase.

### Before

\`\`\`ts
import exampleModule from 'example-module';

const result = exampleModule.doSomething();
\`\`\`

### After

\`\`\`ts
import efficientModule from 'efficient-module';

const result = efficientModule.doSomething();
\`\`\`

---

Now, write a markdown description for the following codemod:

\`\`\`javascript
${code}
\`\`\`

Please only respond with the markdown. No need for additional comments. No need to wrap the markdown in code blocks. Just the plain markdown text.`;

const arg = process.argv[2] ?? "--all";

const codemodsSourceDir = "./codemods";

/** @type{Record<string, string>} */
const entries = {};

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

for (const codemod in entries) {
  const readmePath = `${codemodsSourceDir}/${codemod}/README.md`;
  const code = readFileSync(entries[codemod], "utf-8");

  const result = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant for writing code documentation.",
        },
        {
          role: "user",
          content: makePrompt(code),
        },
      ],
    }),
  });

  const json = await result.json();

  const readmeContent = json.choices[0].message.content;
  writeFileSync(readmePath, readmeContent);
}
