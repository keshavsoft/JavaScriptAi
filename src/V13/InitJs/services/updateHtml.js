import fs from 'fs';
const entryFileName = "start.js";

export function updateHtmlFile({ filePath, folderName }) {
    let content = fs.readFileSync(filePath, 'utf-8');

    const scriptTag = `<script type="module" src="./${folderName}/${entryFileName}"></script>`;
    const hasScript = new RegExp(`<script[^>]*src=["'][^"']*${folderName}/${entryFileName}["'][^>]*>`, 'i').test(content);

    if (hasScript) throw new Error('SCRIPT_ALREADY_PRESENT');

    content = content.replace("</body>", `  ${scriptTag}\n</body>`);
    fs.writeFileSync(filePath, content);
};