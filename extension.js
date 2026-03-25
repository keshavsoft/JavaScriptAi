import * as vscode from 'vscode';
import { registerAllCommands } from './src/V13/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };