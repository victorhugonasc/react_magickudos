export const store = require('../../../State/Store');

export function getStore() {
    return store.default;
} 

export function dispatchAction(action) {
    return getStore().dispatch(action);
}

export default {dispatchAction};