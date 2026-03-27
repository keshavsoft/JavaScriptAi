import { startOrchestration } from './orchestration/startOrchestration.js';

export function AddHtmlIdCommand(context) {
    return async (uri) => startOrchestration({ uri });
};