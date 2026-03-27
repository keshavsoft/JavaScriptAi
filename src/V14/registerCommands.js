import * as vscode from 'vscode';
// import { initCommand } from './commands/initCommand.js';
import { listenersCommand } from './commands/listenersCommand.js';
import { fetchCallsCommand } from './commands/fetchCallsCommand.js';
import { businessCommand } from './commands/businessCommand.js';
import { fetchFromServerCommand } from './commands/fetchFromServer.js';
import { addFetchCommand } from './commands/addFetch.js';

import { registerAllCommands as ForExplorerCommands } from './ForExplorerCommands/registerCommands.js';

export function registerAllCommands(context) {
    // const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const listeners = vscode.commands.registerCommand('extension.addListeners', listenersCommand(context));
    const fetchCalls = vscode.commands.registerCommand('extension.FetchCalls', fetchCallsCommand(context));
    const business = vscode.commands.registerCommand('extension.addBusiness', businessCommand(context));
    const fetchFromServer = vscode.commands.registerCommand('extension.fetchFromServer', fetchFromServerCommand(context));
    const addFetch = vscode.commands.registerCommand('extension.fetchCommand', addFetchCommand(context));

    context.subscriptions.push(listeners, fetchCalls, business, fetchFromServer, addFetch);

    ForExplorerCommands(context);
};
