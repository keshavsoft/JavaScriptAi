// src/V9/InitJs/services/precheck.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function runPrechecks({ dirName, folderName, fullPath }) {
    const folderPath = path.join(dirName, folderName);
    if (fs.existsSync(folderPath)) throw new Error('FOLDER_EXISTS');

    const templatePath = fileURLToPath(new URL('../templates/Base', import.meta.url));
    if (!fs.existsSync(templatePath)) throw new Error('TEMPLATE_MISSING');

    const htmlContent = fs.readFileSync(fullPath, 'utf-8');

    const hasScript = /<script[^>]*src=["'][^"']*Index\/start\.js["'][^>]*>/i.test(htmlContent);

    if (hasScript) throw new Error('SCRIPT_ALREADY_PRESENT');

    return true;
};