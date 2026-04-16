import * as vscode from 'vscode';

import { initCommand } from './InitJs/start.js';
import { listenersCommand } from './AddListeners/start.js';
import { AddHtmlIdCommand } from './AddHtmlId/start.js';
import { fetchCallsCommand } from './FetchCalls/start.js';
import { FetchAsGetCommand } from './FetchAsGet/start.js';
import { jsFilesAllCommands } from './JsFiles/registerCommands.js';

export function registerAllCommands(context) {
    const init = vscode.commands.registerCommand('extension.initJs', initCommand(context));
    const listeners = vscode.commands.registerCommand('extension.addListeners', listenersCommand(context));
    const addHtmlId = vscode.commands.registerCommand('extension.addHtmlId', AddHtmlIdCommand(context));
    const fetchCalls = vscode.commands.registerCommand('extension.FetchCalls', fetchCallsCommand(context));
    const FetchAsGet = vscode.commands.registerCommand('extension.FetchAsGet', FetchAsGetCommand(context));

    context.subscriptions.push(init, listeners, addHtmlId, fetchCalls, FetchAsGet);

    jsFilesAllCommands(context);
};