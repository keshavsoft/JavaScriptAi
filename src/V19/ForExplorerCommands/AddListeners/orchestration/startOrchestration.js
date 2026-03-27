// src/V7/AddListeners/orchestration/startOrchestration.js;

import { resolveContext } from '../utils/context.js';
import { finalize, fail } from '../utils/response.js';
import { copyTemplate } from '../services/copyTemplate.js';
import { updateRunAfterDomLoad } from '../services/updateRunAfterDomLoad.js';
import { openRunAfterDomLoad } from '../services/openFile.js';
import { validateContext } from '../services/validateContext.js';

export async function startOrchestration({ uri }) {
    try {
        validateContext({ uri }); // 🔽 ADD THIS LINE AT TOP

        const context = resolveContext(uri);

        const targetExactPath = context.dirName;

        copyTemplate({
            targetPath: targetExactPath
        });

        updateRunAfterDomLoad({ targetExactPath });
        openRunAfterDomLoad(targetExactPath);

        finalize({ folderPath: targetExactPath });
    } catch (error) {
        fail(error);
    };
};