// src/V1/services/fileService.js

import fs from 'fs';
import path from 'path';
import { entryTemplate } from '../templates/entryTemplate.js';
import { capitalizeFirstLetter } from '../utils/capitalize.js';

export function ensureEntryFile({ baseName, dirName }) {
    const folderName = capitalizeFirstLetter(baseName);
    const folderPath = path.join(dirName, folderName);

    const filePath = path.join(folderPath, "entryFile.js");

    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, entryTemplate());
    }

    return filePath;
}