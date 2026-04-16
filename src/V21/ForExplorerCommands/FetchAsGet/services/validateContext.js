import path from 'path';

export const validateContext = ({ uri }) => {
    if (!uri) throw new Error('No file selected');

    const fileName = path.basename(uri.fsPath);
    const fullPath = uri.fsPath;

    if (fileName !== 'clickFunc.js') {
        throw new Error('Invalid file. Must be clickFunc.js');
    };

    if (!fullPath.includes(path.join('FormLoad', 'DomContentLoaded', "AddListeners"))) {
        throw new Error('Invalid location. Must be inside FormLoad/DomContentLoaded/AddListeners');
    };
};