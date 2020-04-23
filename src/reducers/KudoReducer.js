
import {ADD_KUDO,GET_KUDOS} from '../actions/KudoAction';
import {combineReducers} from 'redux';



const inicialState = {
  kudo:{
    sender: "10",
    receiver: "20",
    message: "30",
    layout: "",
    error: "",
  }
}

//Reducer

  export function kudoReducer (state = inicialState, action){
    switch(action.type)
    {

    case ADD_KUDO:
      return{
        ...state,
        sender: action.data.sender,
        receiver: action.data.receiver,
        message: action.data.message,
        layout: action.data.layout,
      }

      case GET_KUDOS:
      return{
        ...state,
      }

    default:
      return state;
  
    }

  }

  //Root Reducer
    export const rootReducer = combineReducers({
    kudo: kudoReducer
  });