// src/V3/services/updateHtml.js

import fs from 'fs';

export function updateHtmlFile({ filePath, folderName }) {
    let content = fs.readFileSync(filePath, 'utf-8');

    const scriptTag = `<script type="module" src="./${folderName}/entryFile.js"></script>`;

    if (!content.includes(scriptTag)) {
        content = content.replace("</body>", `  ${scriptTag}\n</body>`);
        fs.writeFileSync(filePath, content);
    }
};