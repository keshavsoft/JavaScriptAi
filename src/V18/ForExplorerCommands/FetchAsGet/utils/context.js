// src/V2/utils/context.js

import path from 'path';
import { capitalizeFirstLetter } from './capitalize.js';

export function resolveContext(uri) {
    const fullPath = uri.fsPath;

    const baseName = path.basename(fullPath, ".js");
    const dirName = path.dirname(fullPath);

    const folderName = capitalizeFirstLetter(baseName);

    return {
        fullPath,
        baseName,
        dirName,
        folderName   // ✅ final, transformed value
    };
}