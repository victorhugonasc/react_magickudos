import {getStore,dispatchAction,store} from './StoreService';
import StoreService from './StoreService';

describe('actions', () => {

    test('should call get store', () => {
        expect(getStore()).toEqual(store.default);
    });

    test('should call get store', () => {
        const spyService = jest.spyOn(StoreService,"dispatchAction").mockImplementation(() => Promise.resolve(true));
        StoreService.dispatchAction({});
        expect(spyService).toBeCalledWith({});
    });
  
});
