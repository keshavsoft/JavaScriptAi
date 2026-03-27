// src/V9/InitJs/orchestration/startOrchestration.js;

import { resolveContext } from '../utils/context.js';
import { ensureFolder } from '../services/folderService.js';
import { finalize, fail } from '../utils/response.js';
import { updateHtmlFile } from '../services/updateHtml.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { runPrechecks } from '../services/precheck.js';
import { openRunAfterDomLoad } from '../services/openFile.js';

export async function startOrchestration1(uri) {
    const log = (msg) => console.log(`[${new Date().toISOString()}] ${msg}`);

    try {
        if (!uri) throw new Error('No file selected');

        log('START');

        const context = resolveContext(uri);
        log(`Working on: ${context.fileName}`);

        await runPrechecks({
            dirName: context.dirName,
            folderName: context.folderName,
            fullPath: context.fullPath
        });

        const folderPath = await ensureFolder(context);
        if (!folderPath) throw new Error('Folder path is undefined');

        await copyTemplate({ targetPath: folderPath }); // FIXED

        await updateHtmlFile({
            filePath: context.fullPath,
            folderName: context.folderName
        });

        finalize({ folderPath });
        log('DONE');

    } catch (error) {
        log('ERROR');
        fail(error);
    }
};

export async function startOrchestration(uri) {
    try {
        if (!uri) throw new Error('No file selected');

        const context = resolveContext(uri);

        await runPrechecks({
            dirName: context.dirName,
            folderName: context.folderName,
            fullPath: context.fullPath
        });

        const folderPath = await ensureFolder(context);
        if (!folderPath) throw new Error('Folder path is undefined');

        await copyTemplate({ targetPath: folderPath });

        await updateHtmlFile({
            filePath: context.fullPath,
            folderName: context.folderName
        });

        await openRunAfterDomLoad(folderPath);

        finalize({ folderPath });

    } catch (error) {
        fail(error);
    }
};