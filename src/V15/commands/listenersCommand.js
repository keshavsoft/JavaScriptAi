import { startOrchestration } from '../ForExplorerCommands/AddListeners/orchestration/startOrchestration.js';
export function listenersCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};