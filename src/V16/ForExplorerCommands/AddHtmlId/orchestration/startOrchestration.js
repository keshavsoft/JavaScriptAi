// src/V10/AddBusiness/orchestration/startOrchestration.js
import { resolveContext } from '../utils/context.js';
import { finalize } from '../utils/response.js';
import { updateStartJsFile } from '../services/updateRunAfterDomLoad.js';
// import { runPrechecks } from '../services/precheck.js';
import { runFeatureOrchestration } from './runFeatureOrchestration.js';
import { validateContext } from '../services/validateContext.js';
import { openRunAfterDomLoad } from '../services/openFile.js';

export async function startOrchestration({ uri }) {
    const log = (m) => console.log(`[AddBusiness][${new Date().toISOString()}] ${m}`);
    try {
        validateContext({ uri }); // 🔽 ADD THIS LINE AT TOP

        const context = resolveContext(uri);

        // runPrechecks({ dirName: context.dirName, folderName: context.folderName, fullPath: context.fullPath });

        const result = await runFeatureOrchestration({ context, log });

        if (!result) return;

        updateStartJsFile({ targetExactPath: result.basePath, inHtmlId: result.htmlId });
        openRunAfterDomLoad(`${result.basePath}/${result.htmlId}/clickFunc.js`);

        finalize({ folderPath: result.folderPath });
    } catch (e) { log('ERROR'); throw e; }
};