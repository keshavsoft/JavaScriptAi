// src/V3/templates/projectTemplate.js

export function projectTemplate() {
    return {
        "entryFile.js": `import { startFormLoad } from "./FormLoad/start.js";

function startApp() {
    startFormLoad();
};

startApp();
`,

        "FormLoad/start.js": `import { startDomContentLoaded } from "./DomContentLoaded/start.js";

export function startFormLoad() {
    startDomContentLoaded();
}
`,

        "FormLoad/DomContentLoaded/start.js": `import { runAfterDomLoad } from "./runAfterDomLoad.js";

export function startDomContentLoaded() {
    document.addEventListener("DOMContentLoaded", () => {
        runAfterDomLoad();
    });
}
`,

        "FormLoad/DomContentLoaded/runAfterDomLoad.js": `export function runAfterDomLoad() {
    console.log("DOM Loaded → business logic runs here");
}
`
    };
}