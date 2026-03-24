// src/V3/orchestration/startOrchestration.js

import { resolveContext } from '../utils/context.js';
import { ensureFolder } from '../services/folderService.js';
import { createStructure } from '../services/createStructure.js';
import { projectTemplate } from '../templates/projectTemplate.js';
import { finalize, fail } from '../utils/response.js';

export async function startOrchestration(uri) {
    try {
        const context = resolveContext(uri);

        const folderPath = ensureFolder(context);

        const files = projectTemplate();

        createStructure({ folderPath, files });

        finalize({ folderPath });

    } catch (error) {
        fail(error);
    }
};