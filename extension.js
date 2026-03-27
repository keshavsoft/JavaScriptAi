import { registerAllCommands } from './src/V18/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };