import { deleteFunc } from './deleteFunc.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFetchAsGet = async ({ inQuery }) => {
    let localResponse = await deleteFunc({ inQuery });

    StartFuncFromAfterFetch({ inResponse: localResponse });
};

export { startFetchAsGet };
