import * as vscode from 'vscode';

import { formSearchParamsCommand } from './RunAfterDomLoad/FormSearchParams/V1/start.js';

export function jsFilesAllCommands(context) {
    const formSearchParams = vscode.commands.registerCommand('extension.formSearchParams', formSearchParamsCommand(context));

    context.subscriptions.push(formSearchParams);
};