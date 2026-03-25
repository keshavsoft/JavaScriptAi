import fs from 'fs';
import path from 'path';

export function updateRunAfterDomLoad({ targetExactPath, inFolderName }) {
    const filePath = path.join(targetExactPath, "runAfterDomLoad.js");

    let content = fs.readFileSync(filePath, "utf-8");

    const importLine = `import { start${inFolderName} } from "./${inFolderName}/start.js";`;
    const callLine = `start${inFolderName}();`;

    // ensure import at top
    if (!content.includes(importLine)) {
        content = importLine + "\n\n" + content;
    };

    // insert call right after function start line
    if (!content.includes(callLine)) {
        content = content.replace(
            "const runAfterDomLoad = () => {",
            `const runAfterDomLoad = () => {\n    ${callLine}`
        );
    };

    fs.writeFileSync(filePath, content);
};