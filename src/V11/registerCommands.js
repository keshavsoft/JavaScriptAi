import * as vscode from 'vscode';

import { startOrchestration as initJs } from './InitJs/orchestration/startOrchestration.js';
import { startOrchestration as addListeners } from './AddListeners/orchestration/startOrchestration.js';
import { startOrchestration as FetchCalls } from './FetchCalls/orchestration/startOrchestration.js';
import { startOrchestration as addBusiness } from './AddBusiness/orchestration/startOrchestration.js';

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

    const fetchCalls = vscode.commands.registerCommand('extension.FetchCalls', async (uri) => {
        try {
            await FetchCalls({ uri, extensionPath: context.extensionPath });
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

    context.subscriptions.push(init, listeners, business, fetchCalls);
};