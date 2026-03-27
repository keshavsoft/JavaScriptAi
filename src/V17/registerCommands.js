import * as vscode from 'vscode';

// import { fetchCallsCommand } from './commands/fetchCallsCommand.js';

import { fetchFromServerCommand } from './commands/fetchFromServer.js';
import { addFetchCommand } from './commands/addFetch.js';

import { registerAllCommands as ForExplorerCommands } from './ForExplorerCommands/registerCommands.js';

export function registerAllCommands(context) {
    // const fetchCalls = vscode.commands.registerCommand('extension.FetchCalls', fetchCallsCommand(context));

    const fetchFromServer = vscode.commands.registerCommand('extension.fetchFromServer', fetchFromServerCommand(context));
    const addFetch = vscode.commands.registerCommand('extension.fetchCommand', addFetchCommand(context));

    context.subscriptions.push(fetchFromServer, addFetch);

    ForExplorerCommands(context);
};
