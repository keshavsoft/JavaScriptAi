import { registerAllCommands } from './src/V16/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };