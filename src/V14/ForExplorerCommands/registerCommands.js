import * as vscode from 'vscode';

import { initCommand } from './InitJs/start.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));

    context.subscriptions.push(init);
};