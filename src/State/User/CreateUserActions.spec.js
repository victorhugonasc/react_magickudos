import {CREATE_USER,ADD_USER,FAILED_TO_CREATE_USER} from './CreateUserActions';
import {createUser,addUser,failedUser} from './CreateUserActions';
import UserService from '../../App/Service/User/UserService';

const USER = {
    sender:"",
    receiver:"",
    message:"",
    layout:"",
  };

const ERROR = {};

window.alert = () => {};  // provide an empty implementation for window.alert


describe('actions', () => {

  test('should create an action to create user', () => {

  const serviceSpy = jest.spyOn(UserService,"createUser").mockImplementation(() => Promise.resolve(true));
  
  const expectedAction = {
    type: CREATE_USER,
  };

  expect(createUser(USER)).toEqual(expectedAction);
  expect(serviceSpy).toBeCalledWith(USER);
  
  });

  test('should create an action to Add kudo', () => {
  
    const expectedAction = {
      type: ADD_USER,
      value: USER
    };
    expect(addUser(USER)).toEqual(expectedAction);
  });

  test('should create an action to Fail to add kudo', () => {
  
    const expectedAction = {
      type: FAILED_TO_CREATE_USER,
      value: ERROR,
    };

    expect(failedUser(ERROR)).toEqual(expectedAction);
  });


  });