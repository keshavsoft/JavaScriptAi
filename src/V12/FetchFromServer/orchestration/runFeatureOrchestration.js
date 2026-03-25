// src/V10/AddBusiness/orchestration/runFeatureOrchestration.js
import fs from 'fs';
import path from 'path';
import * as vscode from 'vscode';
import { fileURLToPath } from 'url';
import { copyTemplate } from '../services/copyTemplate.js';

export async function runFeatureOrchestration({ context, log }) {
    const paths = buildPaths({ context });
    if (checkExists(paths.basePath, log)) return null;

    copy(paths);
    return { folderPath: paths.folderPath, basePath: paths.basePath };
}

function buildPaths({ context }) {
    const folderPath = path.join(context.dirName, context.folderName);
    const basePath = path.join(folderPath, "FormLoad", "DomContentLoaded", "FetchCalls");
    const templatePath = fileURLToPath(new URL('../templates/Base', import.meta.url));
    return { folderPath, basePath, templatePath };
}

function checkExists(basePath, log) {
    if (!fs.existsSync(basePath)) { log('Skipped'); return true; }
    return false;
}

function copy({ templatePath, basePath }) {
    copyTemplate({ templatePath, targetPath: basePath });
};