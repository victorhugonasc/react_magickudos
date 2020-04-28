
import {FETCH_USERS, FAILED_USERS, LOAD_USERS} from './GetUsersActions';


export const initialState = {
  users:[],
  fetch: false,
  error: false,
}

//Reducer

  export default function GetUsersReducer( state = initialState, action) {
    
    switch(action.type)
    {

    case FETCH_USERS:
      return Object.assign({},state, {fetch: true, error:false });

    case LOAD_USERS:
      return Object.assign({},state, {users:action.value, fetch: false, error:false,});

    case FAILED_USERS:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }

