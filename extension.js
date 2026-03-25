import * as vscode from 'vscode';
import { registerAllCommands } from './src/V11/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };