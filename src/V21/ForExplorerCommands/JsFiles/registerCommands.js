import * as vscode from 'vscode';

import { formSearchParamsCommand } from './RunAfterDomLoad/FormSearchParams/V1/start.js';
import { fetchDeleteCommand } from './RunAfterDomLoad/FetchDelete/V2/start.js';

export function jsFilesAllCommands(context) {
    const formSearchParams = vscode.commands.registerCommand('extension.formSearchParams', formSearchParamsCommand(context));
    const fetchDelete = vscode.commands.registerCommand('extension.js.runAfterDomLoad.fetch.delete', fetchDeleteCommand(context));

    context.subscriptions.push(formSearchParams, fetchDelete);
};