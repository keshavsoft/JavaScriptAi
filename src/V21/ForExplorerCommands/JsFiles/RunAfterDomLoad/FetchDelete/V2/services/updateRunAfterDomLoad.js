import fs from 'fs';
import path from 'path';

export function updateRunAfterDomLoad({ targetExactPath }) {
    const filePath = path.join(targetExactPath, "runAfterDomLoad.js");

    let content = fs.readFileSync(filePath, "utf-8");

    const importLine = `import { deleteFunc } from "./FetchAsDelete/deleteFunc.js";`;

    // ensure import at top
    if (!content.includes(importLine)) {
        content = importLine + "\n\n" + content;
    };

    fs.writeFileSync(filePath, content);
};