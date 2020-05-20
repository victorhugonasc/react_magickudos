import {createKudo,addKudo,failedKudo,CREATE_KUDO,ADD_KUDO,FAILED_TO_CREATE_KUDO} from './CreateKudoActions';

const KUDO = {
  sender:"",
  receiver:"",
  message:"",
  layout:"",
};

const ERROR = {};

window.alert = () => {};  // provide an empty implementation for window.alert


describe('actions', () => {

  test('should create an action to Create Kudo', () => {
   
    const expectedAction = {
      type: FAILED_TO_CREATE_KUDO,
      value: ERROR,
    };

    expect(failedKudo(ERROR)).toEqual(expectedAction);
  });

  test('should create an action to Add kudo', () => {
  
    const expectedAction = {
      type: CREATE_KUDO,
    };
    expect(createKudo(KUDO)).toEqual(expectedAction);
  });

  test('should create an action to Fail to add kudo', () => {
  
    const expectedAction = {
      type: FAILED_TO_CREATE_KUDO,
      value: ERROR,
    };

    expect(failedKudo(ERROR)).toEqual(expectedAction);
  });


  });