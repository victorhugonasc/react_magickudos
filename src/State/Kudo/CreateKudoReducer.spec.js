import {CREATE_KUDO,ADD_KUDO,FAILED_TO_CREATE_KUDO} from './CreateKudoActions';
import { initialState } from './CreateKudoReducer';
import CreateKudoReducer from './CreateKudoReducer';

const KUDO = {
    sender:"",
    receiver:"",
    message:"",
    layout:"",
};

describe('Create kudo reducer', () => {

    test('should return object assign when action type is CREATE KUDO', () => {
        const ACTION = {type:CREATE_KUDO};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: true, error:false });
        expect(CreateKudoReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is ADD_KUDO', () => {
        const ACTION = {
            type:ADD_KUDO,
            value: KUDO
        };
        const EXPECTED_RETURN = Object.assign({},initialState, {kudo: ACTION.value, fetch: false, error:false });
        expect(CreateKudoReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is FAILED TO CREATE KUDO', () => {
        const ACTION = {type:FAILED_TO_CREATE_KUDO};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: false, error:true });
        expect(CreateKudoReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return default state', () => {
        const DEFAULT = "default";
        const ACTION = {type:DEFAULT};
        const EXPECTED_RETURN = initialState;
        expect(CreateKudoReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });
});
