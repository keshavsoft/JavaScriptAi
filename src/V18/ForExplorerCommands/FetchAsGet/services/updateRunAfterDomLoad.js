import fs from 'fs';
import path from 'path';

export function updateRunAfterDomLoad({ targetExactPath }) {
    const filePath = path.join(targetExactPath, "clickFunc.js");

    let content = fs.readFileSync(filePath, "utf-8");

    const importLine = `import { startFetchAsGet } from "./FetchAsGet/start.js";`;
    const callLine = `startFetchAsGet();`;

    // ensure import at top
    if (!content.includes(importLine)) {
        content = importLine + "\n\n" + content;
    };

    // insert call right after function start line
    if (!content.includes(callLine)) {
        content = content.replace(
            "const clickFuncToRun = () => {",
            `const clickFuncToRun = () => {\n    ${callLine}`
        );
    };

    fs.writeFileSync(filePath, content);
};