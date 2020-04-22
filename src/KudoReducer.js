
import {ADD_KUDO} from './KudoAction';
import {combineReducers} from 'redux';

//Reducer

  export function kudoReducer (state={
  number : 0,
  sender: "",
  receiver: "",
  message: "",
  layout: "",
  error: "",
}
,action){

    switch(action.type)
    {

    case ADD_KUDO:
      return{
        ...state,
        sender: action.sender,
        receiver: action.receiver,
        message: action.message,
        layout: action.layout,
      }

    default:
      return state;
  
    }

  }

  //Root Reducer
    export const rootReducer = combineReducers({
    kudo: kudoReducer
  });