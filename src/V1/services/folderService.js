// src/V1/services/folderService.js

import fs from 'fs';
import path from 'path';
import { capitalizeFirstLetter } from '../utils/capitalize.js';

export function ensureFolder({ baseName, dirName }) {
    const folderName = capitalizeFirstLetter(baseName);

    const folderPath = path.join(dirName, folderName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    return folderPath;
}