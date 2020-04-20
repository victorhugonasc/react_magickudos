
import {ADD_NUMBER,SUBTRACT_NUMBER,GET_ALL_KUDOS,ON_SUBMIT_FORM} from './KudoAction';
import {combineReducers} from 'redux';

//Reducer

  export function mathReducer (state={
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
  
      case ADD_NUMBER:
        return{
          ...state,
          number: state.number + action.payload,
        }
  
      case SUBTRACT_NUMBER:
        return{
          ...state,
          number: state.number - action.payload,
        }

      case GET_ALL_KUDOS:
        return{
          ...state,
          number: state.number * action.payload,
        }

        case ON_SUBMIT_FORM:
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
    math: mathReducer
  });