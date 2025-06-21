#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

program
  .name('module-replace')
  .description('Replace modules in JS/TS projects')
  .version('0.1.0');

program
  .argument('<source>', 'source module name')
  .argument('<target>', 'target module name')
  .option('-d, --dir <directory>', 'directory to scan', '.')
  .action(async (source, target, options) => {
    const dir = options.dir;

    const pattern = `${dir}/**/*.{js,ts,jsx,tsx}`;
    const files = glob.sync(pattern, { absolute: true, nodir: true });

    for (const file of files) {
      let content = await fs.readFile(file, 'utf8');

      const regexImport = new RegExp(`(['"\`])${source}\\1`, 'g');
      if (regexImport.test(content)) {
        content = content.replace(regexImport, `'${target}'`);
        await fs.writeFile(file, content, 'utf8');
        console.log(`Replaced in: ${file}`);
      }
    }

    console.log('Done.');
  });

program.parse();