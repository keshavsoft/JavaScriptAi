// src/V8/AddListeners/orchestration/startOrchestration.js;
import fs from 'fs';
import path from 'path';

import { resolveContext } from '../utils/context.js';
import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { updateStartJsFile } from '../services/updateRunAfterDomLoad.js';

import { fileURLToPath } from 'url';

export async function startOrchestration({ uri, extensionPath, htmlId }) {
    try {
        const context = resolveContext(uri);

        const folderPath = path.join(context.dirName, context.folderName);
        const targetExactPath = path.join(folderPath, "FormLoad", "DomContentLoaded", "AddListeners", htmlId);

        const templatePath = fileURLToPath(
            new URL('../templates/Base', import.meta.url)
        );

        if (fs.existsSync(targetExactPath)) {
            fail(new Error(`${targetExactPath} already exists.`));
            return;
        };

        copyTemplate({
            templatePath,
            targetPath: targetExactPath
        });

        updateStartJsFile({
            targetExactPath: path.join(folderPath, "FormLoad", "DomContentLoaded", "AddListeners"),
            inHtmlId: htmlId
        });

        finalize({ folderPath });

    } catch (error) {
        fail(error);
    };
};