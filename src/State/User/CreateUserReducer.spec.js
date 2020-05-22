import {CREATE_USER,ADD_USER,FAILED_TO_CREATE_USER} from './CreateUserActions';
import { initialState } from './CreateUserReducer';
import CreateUserReducer from './CreateUserReducer';

const USER = {
    name:"",
    user:"",
    id:"",
    email:"",
    password:"",
  };

describe('Create kudo reducer', () => {

    test('should return object assign when action type is CREATE USER', () => {
        const ACTION = {type:CREATE_USER};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: true, error:false });
        expect(CreateUserReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is ADD_USER', () => {
        const ACTION = {
            type:ADD_USER,
            value: USER
        };
        const EXPECTED_RETURN = Object.assign({},initialState, {user: ACTION.value, fetch: false, error:false });
        expect(CreateUserReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is FAILED TO CREATE USER', () => {
        const ACTION = {type:FAILED_TO_CREATE_USER};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: false, error:true });
        expect(CreateUserReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return default state', () => {
        const DEFAULT = "default";
        const ACTION = {type:DEFAULT};
        const EXPECTED_RETURN = initialState;
        expect(CreateUserReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });
});
