import {FETCH_USERS, FAILED_USERS, LOAD_USERS} from './GetUsersActions';
import initialState from './GetUsersReducer';
import GetUsersReducer from './GetUsersReducer';

const USER = {
    name:"",
    user:"",
    id:"",
    email:"",
    password:"",
  };

describe('Create kudo reducer', () => {

    test('should return object assign when action type is FETCH KUDOS', () => {
        const ACTION = {type:FETCH_USERS};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: true, error:false });
        expect(GetUsersReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is LOAD KUDOS', () => {
        const ACTION = {
            type:LOAD_USERS,
            value: USER
        };
        const EXPECTED_RETURN = Object.assign({},initialState, {users: ACTION.value, fetch: false, error:false });
        expect(GetUsersReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return object assign when action type is FAILED KUDOS', () => {
        const ACTION = {type:FAILED_USERS};
        const EXPECTED_RETURN = Object.assign({},initialState, {fetch: false, error:true });
        expect(GetUsersReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });

    test('should return default state', () => {
        const DEFAULT = "default";
        const ACTION = {type:DEFAULT};
        const EXPECTED_RETURN = initialState;
        expect(GetUsersReducer(initialState,ACTION)).toEqual(EXPECTED_RETURN);
    });
});
