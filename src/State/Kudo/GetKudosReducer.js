
import {FETCH_KUDOS, FAILED_KUDOS, LOAD_KUDOS} from './GetKudosActions';


export const initialState = {
  kudos:[],
  fetch: false,
  error: false,
}

//Reducer

  export default function GetKudosReducer( state = initialState, action) {
    
    switch(action.type)
    {

    case FETCH_KUDOS:
      return Object.assign({},state, {fetch: true, error:false });

    case LOAD_KUDOS:
      return Object.assign({},state, {kudos:action.value, fetch: false, error:false,});

    case FAILED_KUDOS:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }

