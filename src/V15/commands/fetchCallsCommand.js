import { startOrchestration } from '../FetchCalls/orchestration/startOrchestration.js';
export function fetchCallsCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};