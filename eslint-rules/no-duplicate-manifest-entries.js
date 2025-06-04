import fs from 'fs';
import path from 'path';

const manifestDir = path.resolve(process.cwd(), 'manifests');

function loadManifest(fileName) {
  const filePath = path.join(manifestDir, fileName);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function getDuplicates(manifests) {
  const seen = new Map();
  const duplicates = [];

  for (const [manifestName, entries] of Object.entries(manifests)) {
    for (const moduleName of Object.keys(entries)) {
      const key = moduleName.toLowerCase();
      if (seen.has(key)) {
        duplicates.push({
          moduleName,
          first: seen.get(key),
          second: manifestName,
        });
      } else {
        seen.set(key, manifestName);
      }
    }
  }

  return duplicates;
}

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow duplicate modules across manifests',
    },
    schema: [],
  },
  create(context) {
    // only run once per lint run (on Program)
    if (context.getFilename().endsWith('.js') === false) return {};

    const manifestFiles = fs.readdirSync(manifestDir).filter(f => f.endsWith('.json'));

    const manifests = {};
    for (const file of manifestFiles) {
      manifests[file] = loadManifest(file);
    }

    const duplicates = getDuplicates(manifests);

    if (duplicates.length > 0) {
      for (const dup of duplicates) {
        context.report({
          loc: { line: 1, column: 0 },
          message: `Module "${dup.moduleName}" found in both "${dup.first}" and "${dup.second}"`,
        });
      }
    }

    return {};
  },
};