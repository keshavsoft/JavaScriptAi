import { startOrchestration } from '../AddBusiness/orchestration/startOrchestration.js';
export function businessCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};