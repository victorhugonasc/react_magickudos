
import {FETCH_KUDOS, LOAD_KUDOS,UPDATE_KUDO,REQUEST_TO_UPDATE_KUDO,FAILED_KUDOS} from './GetKudosActions';


export const initialState = {
  kudos:[],
  fetch: false,
  updating: false,
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

      case UPDATE_KUDO:
      return Object.assign({},state, {updating: true, error:false });

    case REQUEST_TO_UPDATE_KUDO:
      return Object.assign({},state, {kudos:action.value, updating: false, error:false,});

    case FAILED_KUDOS:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }

