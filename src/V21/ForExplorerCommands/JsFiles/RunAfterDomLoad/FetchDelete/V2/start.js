import { startOrchestration } from './orchestration/startOrchestration.js';

export function fetchDeleteCommand(context) {
    return async (uri) => startOrchestration({ uri });
};