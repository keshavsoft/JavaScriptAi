import { registerAllCommands } from './src/V15/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };