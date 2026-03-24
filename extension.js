import * as vscode from 'vscode';
import { startOrchestration } from './src/V6/InitJs/orchestration/startOrchestration.js';
import { startOrchestration as AddListeners } from './src/V6/AddListeners/orchestration/startOrchestration.js';

export function activate(context) {
	const disposable = vscode.commands.registerCommand('extension.initJs', (uri) => {
		console.log("COMMAND TRIGGERED");
		startOrchestration(uri, context.extensionPath);
	});

	context.subscriptions.push(disposable);

	const disposable1 = vscode.commands.registerCommand('extension.addListeners', (uri) => {
		console.log("COMMAND TRIGGERED");
		AddListeners(uri, context.extensionPath);
	});

	context.subscriptions.push(disposable1);
};

export function deactivate() { };