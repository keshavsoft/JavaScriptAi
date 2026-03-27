// src/V10/AddBusiness/orchestration/runFeatureOrchestration.js
import fs from 'fs';
import path from 'path';
import * as vscode from 'vscode';
import { fileURLToPath } from 'url';
import { copyTemplate } from '../services/copyTemplate.js';

export async function runFeatureOrchestration({ context, log }) {
    const htmlId = await getfetchName();
    if (!htmlId) return null;

    const paths = buildPaths({ context, htmlId });
    if (checkExists(paths.targetExactPath, log)) return null;

    copy(paths);
    return { fetchName: htmlId, folderPath: paths.folderPath, basePath: paths.basePath };
}

async function getfetchName() {
    return await vscode.window.showInputBox({ prompt: 'Enter fetchName' });
}

function buildPaths({ context, htmlId }) {
    const folderPath = path.join(context.dirName, context.folderName);
    const basePath = path.join(folderPath, "FormLoad", "DomContentLoaded", "FetchCalls");
    const targetExactPath = path.join(basePath, htmlId);
    const templatePath = fileURLToPath(new URL('../templates/Base/FetchAsGet', import.meta.url));
    return { folderPath, basePath, targetExactPath, templatePath };
}

function checkExists(targetExactPath, log) {
    if (fs.existsSync(targetExactPath)) { log('Skipped'); return true; }
    return false;
}

function copy({ templatePath, targetExactPath }) {
    copyTemplate({ templatePath, targetPath: targetExactPath });
};