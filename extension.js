import { registerAllCommands } from './src/V20/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };