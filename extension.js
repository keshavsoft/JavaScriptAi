import { registerAllCommands } from './src/V17/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };