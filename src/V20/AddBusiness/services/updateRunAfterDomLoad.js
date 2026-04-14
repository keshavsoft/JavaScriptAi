import fs from 'fs';
import path from 'path';

export function updateStartJsFile({ targetExactPath, inHtmlId }) {
    const filePath = path.join(targetExactPath, "start.js");

    let content = fs.readFileSync(filePath, "utf-8");

    const importLine = `import { funcToRun as funcToRunFor${inHtmlId} } from "./${inHtmlId}/start.js";`;
    const callLine = `funcToRunFor${inHtmlId}();`;

    // ensure import at top
    if (!content.includes(importLine)) {
        content = importLine + "\n\n" + content;
    };

    // insert call right after function start line
    if (!content.includes(callLine)) {
        content = content.replace(
            "const hookAllListeners = () => {",
            `const hookAllListeners = () => {\n    ${callLine}`
        );
    };

    fs.writeFileSync(filePath, content);
};