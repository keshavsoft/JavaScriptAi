import * as vscode from 'vscode';
import { startOrchestration } from './src/V5/orchestration/startOrchestration.js';

export function activate(context) {
	const disposable = vscode.commands.registerCommand('extension.initJs', (uri) => {
		console.log("COMMAND TRIGGERED");
		startOrchestration(uri, context.extensionPath);
	});

	context.subscriptions.push(disposable);
};

export function deactivate() { };