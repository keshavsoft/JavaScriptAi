import { registerAllCommands } from './src/V21/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };