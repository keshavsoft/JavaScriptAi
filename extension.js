// extension.js (ONLY orchestration)

import * as vscode from 'vscode';

const CURRENT_VERSION = 'V3';

export async function activate(context) {
	const modulePath = new URL(`./src/${CURRENT_VERSION}/orchestration/startOrchestration.js`, import.meta.url);

	const module = await import(modulePath);

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.initJs', module.startOrchestration)
	);
};

export function deactivate() { }