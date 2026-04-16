import * as vscode from 'vscode';
import path from 'path';

export const openRunAfterDomLoad = async (folderPath) => {
    const fileToOpen = path.join(
        folderPath,
        'FormSearchParams',
        'start.js'
    );

    const document = await vscode.workspace.openTextDocument(
        vscode.Uri.file(fileToOpen)
    );

    await vscode.window.showTextDocument(document);
};