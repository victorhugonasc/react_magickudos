import {FETCH_KUDOS, FAILED_KUDOS, LOAD_KUDOS} from './GetKudosActions';
import initialState from './GetKudosReducer';
import GetKudosReducer from './GetKudosReducer';

const KUDO = {
    sender:"",
    receiver:"",
    message:"",
    layout:"",
};

describe('Create kudo reducer', () => {

    test('should return object assign when action type is FETCH KUDOS', () => {
        const ACTION = {type:FETCH_KUDOS};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: true, error:false });
        expect(GetKudosReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is LOAD KUDOS', () => {
        const ACTION = {
            type:LOAD_KUDOS,
            value: KUDO
        };
        const EXPECTED_RETURN = Object.assign({},initialState, {kudos: ACTION.value, fetch: false, error:false });
        expect(GetKudosReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is FAILED KUDOS', () => {
        const ACTION = {type:FAILED_KUDOS};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: false, error:true });
        expect(GetKudosReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return default state', () => {
        const DEFAULT = "default";
        const ACTION = {type:DEFAULT};
        const EXPECTED_RETURN = initialState;
        expect(GetKudosReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });
});
