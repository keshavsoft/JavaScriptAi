import { startOrchestration } from './orchestration/startOrchestration.js';

export function initCommand(context) {
    return async (uri) => startOrchestration(uri);
};