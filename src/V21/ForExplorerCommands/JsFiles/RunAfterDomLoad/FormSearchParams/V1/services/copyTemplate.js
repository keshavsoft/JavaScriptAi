import fs from 'fs';

import { fileURLToPath } from 'url';

export function copyTemplate({ targetPath }) {
    const templatePath = fileURLToPath(
        new URL('../templates/Base', import.meta.url)
    );

    fs.cpSync(templatePath, targetPath, {
        recursive: true
    });
}