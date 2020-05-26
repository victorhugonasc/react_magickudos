

export function getStore() {
    const store = require('../../../State/Store');
    return store.default;
} 

export function dispatchAction(action) {
    return getStore().dispatch(action);
}

export default {dispatchAction};