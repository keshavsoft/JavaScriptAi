// src/utils/context.js

import path from 'path';

export function resolveContext(uri) {
    const fullPath = uri.fsPath;

    return {
        fullPath,
        baseName: path.basename(fullPath, ".html"),
        dirName: path.dirname(fullPath)
    };
}