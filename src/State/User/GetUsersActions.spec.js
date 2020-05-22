import {FETCH_USERS,LOAD_USERS,FAILED_USERS} from './GetUsersActions';
import {fetchUsers,loadUsers,failedUsers} from './GetUsersActions';
import UserService from '../../App/Service/User/UserService';

const USER = {
    name:"",
    user:"",
    id:"",
    email:"",
    password:"",
  };

const ERROR = {};


describe('Create user action`s test', () => {

    test('should create an action to create user', () => {
  
    const serviceSpy = jest.spyOn(UserService,"getUsers").mockImplementation(() => Promise.resolve(true));
    
    const expectedAction = {
      type: FETCH_USERS,
    };
  
    expect(fetchUsers()).toEqual(expectedAction);
    expect(serviceSpy).toBeCalledWith();
    
    });
  
    test('should create an action to Load users', () => {
    
      const expectedAction = {
        type: LOAD_USERS,
        value: USER
      };
      expect(loadUsers(USER)).toEqual(expectedAction);
    });
  
    test('should create an action to Failed users', () => {
    
      const expectedAction = {
        type: FAILED_USERS,
        value: ERROR,
      };
  
      expect(failedUsers(ERROR)).toEqual(expectedAction);
    });
  
  
    });