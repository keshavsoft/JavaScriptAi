import fs from 'fs';

export function updateClickFunc({ targetExactPath, inHtmlId }) {
    const filePath = targetExactPath;

    let content = fs.readFileSync(filePath, "utf-8");
    content = content.replace("${htmlId}", inHtmlId);

    fs.writeFileSync(filePath, content);
};