import * as vscode from 'vscode';

import { initCommand } from './InitJs/start.js';
import { listenersCommand } from './AddListeners/start.js';
import { AddHtmlIdCommand } from './AddHtmlId/start.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const listeners = vscode.commands.registerCommand('extension.addListeners', listenersCommand(context));
    const addHtmlId = vscode.commands.registerCommand('extension.addHtmlId', AddHtmlIdCommand(context));

    context.subscriptions.push(init, listeners, addHtmlId);
};