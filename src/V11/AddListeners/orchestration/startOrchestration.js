// src/V7/AddListeners/orchestration/startOrchestration.js;
import fs from 'fs';
import path from 'path';

import { resolveContext } from '../utils/context.js';
import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { updateRunAfterDomLoad } from '../services/updateRunAfterDomLoad.js';

import { fileURLToPath } from 'url';

export async function startOrchestration({ uri, extensionPath }) {
    try {
        const context = resolveContext(uri);

        const folderPath = path.join(context.dirName, context.folderName);
        const targetExactPath = path.join(folderPath, "FormLoad", "DomContentLoaded");

        const templatePath = fileURLToPath(
            new URL('../templates/Base', import.meta.url)
        );

        if (!fs.existsSync(targetExactPath)) {
            fail(new Error("FormLoad/DomContentLoaded not found. Run InitJs first."));
            return;
        };

        const addListenersPath = path.join(targetExactPath, "AddListeners");

        if (fs.existsSync(addListenersPath)) {
            fail(new Error("AddListeners already exists."));
            return;
        };

        copyTemplate({
            templatePath,
            targetPath: targetExactPath
        });

        updateRunAfterDomLoad({ targetExactPath: targetExactPath });

        finalize({ folderPath });
    } catch (error) {
        fail(error);
    };
};