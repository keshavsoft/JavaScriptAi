import { startOrchestration } from './orchestration/startOrchestration.js';

export function formSearchParamsCommand(context) {
    return async (uri) => startOrchestration({ uri });
};