// src/V7/AddListeners/services/validateContext.js;

import path from 'path';

export const validateContext = ({ uri }) => {
    if (!uri) throw new Error('No file selected');

    const fileName = path.basename(uri.fsPath);
    const fullPath = uri.fsPath;

    if (fileName !== 'runAfterDomLoad.js') {
        throw new Error('Invalid file. Must be runAfterDomLoad.js');
    };

    if (!fullPath.includes(path.join('FormLoad', 'DomContentLoaded'))) {
        throw new Error('Invalid location. Must be inside FormLoad/DomContentLoaded');
    };
};