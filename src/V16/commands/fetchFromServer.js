import { startOrchestration } from '../FetchFromServer/orchestration/startOrchestration.js';

export function fetchFromServerCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};