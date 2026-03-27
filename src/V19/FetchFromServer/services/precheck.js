// src/V12/FetchFromServer/services/precheck.js

import fs from 'fs';
import path from 'path';

export function runPrechecks({ dirName, folderName, fullPath }) {
    const log = (msg) => console.log(`[AddListeners][${new Date().toISOString()}] ${msg}`);

    // Step 1: HTML file must exist
    if (!fs.existsSync(fullPath)) {
        log('FAIL: HTML file not found');
        throw new Error('HTML file not found');
    }

    // Step 2: Base FetchCalls folder path must exist
    const basePath = path.join(
        dirName,
        folderName,
        "FormLoad",
        "DomContentLoaded",
        "FetchCalls"
    );

    if (!fs.existsSync(basePath)) {
        log('FAIL: Base FetchCalls folder missing');
        throw new Error('Base folder missing');
    }

    log('PASS: Prechecks completed');
};