import { startOrchestration } from './orchestration/startOrchestration.js';

export function listenersCommand(context) {
    return async (uri) => startOrchestration({ uri });
};