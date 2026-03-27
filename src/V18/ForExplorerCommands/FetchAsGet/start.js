import { startOrchestration } from './orchestration/startOrchestration.js';

export function FetchAsGetCommand(context) {
    return async (uri) => startOrchestration({ uri });
};