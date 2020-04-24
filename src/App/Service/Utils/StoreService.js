//import {store} from '../../../State/Store/index';


function getStore() {
    const store = require('../../../State/Store');
    return store.default;
} 

function dispatchAction(action) {
    return getStore().dispatch(action);
}

export default {dispatchAction};