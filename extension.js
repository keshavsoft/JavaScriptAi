import { registerAllCommands } from './src/V14/registerCommands.js';

export function activate(context) {
	registerAllCommands(context);
};

export function deactivate() { };