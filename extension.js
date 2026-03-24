import * as vscode from 'vscode';
import { startOrchestration } from './src/V8/InitJs/orchestration/startOrchestration.js';
import { startOrchestration as AddListeners } from './src/V8/AddListeners/orchestration/startOrchestration.js';
import { startOrchestration as AddBusiness } from './src/V8/AddBusiness/orchestration/startOrchestration.js';

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

	const disposable2 = vscode.commands.registerCommand('extension.addBusiness', async (uri) => {
		const htmlId = await vscode.window.showInputBox({ prompt: 'Enter HTML ID' });
		if (!htmlId) { return; }
		AddBusiness({ uri, extensionPath: context.extensionPath, htmlId });
	});

	context.subscriptions.push(disposable2);
};

export function deactivate() { };