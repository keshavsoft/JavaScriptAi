// src/V9/InitJs/orchestration/startOrchestration.js;

import { resolveContext } from '../utils/context.js';
import { ensureFolder } from '../services/folderService.js';
import { finalize, fail } from '../utils/response.js';
import { updateHtmlFile } from '../services/updateHtml.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { runPrechecks } from '../services/precheck.js';

import { fileURLToPath } from 'url';
import path from 'path';
import * as vscode from 'vscode';

export async function startOrchestration(uri, extensionPath) {
    const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);
    try {
        // orchestration change (top)
        log('START');
        const context = resolveContext(uri); log('Context resolved');

        runPrechecks({
            dirName: context.dirName,
            folderName: context.folderName,
            fullPath: context.fullPath
        });
        log('Prechecks passed');

        const folderPath = ensureFolder(context); log('Folder created');

        copyTemplate({ targetPath: folderPath }); log('Template copied');

        updateHtmlFile({ filePath: context.fullPath, folderName: context.folderName }); log('HTML updated');

        finalize({ folderPath }); log('DONE');
    } catch (error) {
        log('ERROR');
        fail(error);
    }
};