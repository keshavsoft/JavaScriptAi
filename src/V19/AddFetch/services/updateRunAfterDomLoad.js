import fs from 'fs';
import path from 'path';

export function updateStartJsFile({ targetExactPath, inFetchName }) {
    const filePath = path.join(targetExactPath, "start.js");

    let content = fs.readFileSync(filePath, "utf-8");

    const importLine = `import { startFetchAsGet as funcToRunFor${inFetchName} } from "./${inFetchName}/start.js";`;
    const callLine = `funcToRunFor${inFetchName}();`;

    // ensure import at top
    if (!content.includes(importLine)) {
        content = importLine + "\n\n" + content;
    };

    // insert call right after function start line
    if (!content.includes(callLine)) {
        content = content.replace(
            "const startFetchCalls = () => {",
            `const startFetchCalls = () => {\n    ${callLine}`
        );
    };

    fs.writeFileSync(filePath, content);
};