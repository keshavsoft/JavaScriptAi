import { registerAllCommands } from './src/V19/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };