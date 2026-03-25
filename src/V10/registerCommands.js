import * as vscode from 'vscode';

import { startOrchestration as initJs } from './InitJs/orchestration/startOrchestration.js';
import { startOrchestration as addListeners } from './AddListeners/orchestration/startOrchestration.js';
import { startOrchestration as addBusiness } from './AddBusiness/orchestration/startOrchestration.js';

export function registerV10_1(context) {
    const init = vscode.commands.registerCommand('extension.initJs', (uri) => {
        initJs(uri, context.extensionPath);
    });

    const listeners = vscode.commands.registerCommand('extension.addListeners', (uri) => {
        addListeners(uri, context.extensionPath);
    });

    const business = vscode.commands.registerCommand('extension.addBusiness', async (uri) => {
        addBusiness({ uri, extensionPath: context.extensionPath });
    });

    context.subscriptions.push(init, listeners, business);
};

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', async (uri) => {
        try {
            await initJs(uri, context.extensionPath);
        } catch (e) {
            vscode.window.showErrorMessage(e.message);
        }
    });

    const listeners = vscode.commands.registerCommand('extension.addListeners', async (uri) => {
        try {
            await addListeners({ uri, extensionPath: context.extensionPath });
        } catch (e) {
            vscode.window.showErrorMessage(e.message);
        }
    });

    const business = vscode.commands.registerCommand('extension.addBusiness', async (uri) => {
        try {
            await addBusiness({ uri, extensionPath: context.extensionPath });
        } catch (e) {
            vscode.window.showErrorMessage(e.message);
        }
    });

    context.subscriptions.push(init, listeners, business);
};