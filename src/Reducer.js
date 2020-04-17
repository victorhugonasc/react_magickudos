
import {ADD_NUMBER,SUBTRACT_NUMBER} from './Action';
import {combineReducers} from 'redux';

//Reducer

  export function mathReducer (state={number : 0},action){

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
  
      default:
        return state;
  
    }

  }

  //Root Reducer
    export const rootReducer = combineReducers({
    math: mathReducer
  });