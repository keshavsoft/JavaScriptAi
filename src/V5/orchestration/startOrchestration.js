// src/V5/orchestration/startOrchestration.js;

import { resolveContext } from '../utils/context.js';
import { ensureFolder } from '../services/folderService.js';
import { finalize, fail } from '../utils/response.js';
import { updateHtmlFile } from '../services/updateHtml.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { fileURLToPath } from 'url';

import path from 'path';

export async function startOrchestration(uri, extensionPath) {
    try {
        const context = resolveContext(uri);

        const folderPath = ensureFolder(context);

        const templatePath = fileURLToPath(
            new URL('../templates/Base', import.meta.url)
        );

        copyTemplate({
            templatePath,
            targetPath: folderPath
        });

        updateHtmlFile({
            filePath: context.fullPath,
            folderName: context.folderName
        });

        finalize({ folderPath });

    } catch (error) {
        fail(error);
    };
};