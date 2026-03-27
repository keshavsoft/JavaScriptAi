import { startOrchestration } from '../AddFetch/orchestration/startOrchestration.js';

export function addFetchCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};