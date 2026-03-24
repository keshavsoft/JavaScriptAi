// src/V1/orchestration/start.js

import { resolveContext } from '../utils/context.js';
import { ensureFolder } from '../services/folderService.js';
import { ensureEntryFile } from '../services/fileService.js';
import { finalize, fail } from '../utils/response.js';

export async function startOrchestration(uri) {
    try {
        const contextInfo = resolveContext(uri);

        const folderPath = ensureFolder(contextInfo);
        const entryFilePath = ensureEntryFile(contextInfo);

        finalize({ folderPath, entryFilePath });

    } catch (error) {
        fail(error);
    }
}