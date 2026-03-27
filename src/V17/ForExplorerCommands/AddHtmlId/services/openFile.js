// src/V9/InitJs/services/openFile.js;

import * as vscode from 'vscode';

export const openRunAfterDomLoad = async (folderPath) => {
    const document = await vscode.workspace.openTextDocument(
        vscode.Uri.file(folderPath)
    );

    await vscode.window.showTextDocument(document);
};