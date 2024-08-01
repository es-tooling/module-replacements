import {validateModuleList} from './validate-module-list.js';
import {validateManifests} from './validate-manifests.js';
import {checkManifestsForProblems} from './check-manifest-problems.js';

await validateManifests();
await validateModuleList();
await checkManifestsForProblems();
