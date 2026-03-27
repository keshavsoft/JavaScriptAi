import * as vscode from 'vscode';

import { initCommand } from './InitJs/start.js';
import { listenersCommand } from './AddListeners/start.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const listeners = vscode.commands.registerCommand('extension.addListeners', listenersCommand(context));

    context.subscriptions.push(init, listeners);
};