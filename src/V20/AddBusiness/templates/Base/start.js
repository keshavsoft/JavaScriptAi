import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    document.addEventListener("click", clickFuncToRun);
};

export { funcToRun };
