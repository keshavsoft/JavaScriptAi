import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('${htmlId}');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
