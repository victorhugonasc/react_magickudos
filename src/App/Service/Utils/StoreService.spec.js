import StoreService,{dispatchAction} from './StoreService';

test(" HTTP get request ", () => {
    
    const spy = jest.spyOn(StoreService,"dispatchAction").mockImplementation(() => Promise.resolve(true));
    
    const ACTION = {};

    StoreService.dispatchAction(ACTION);

    expect(spy).toBeCalledWith(ACTION);

});