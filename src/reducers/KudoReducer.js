
import {ADD_KUDO} from '../actions/KudoAction';
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
    console.log(action);
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