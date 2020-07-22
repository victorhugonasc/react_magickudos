
import {CREATE_USER,ADD_USER,FAILED_TO_CREATE_USER} from './CreateUserActions';


export const initialState = {
  user:{
    name:"",
    email:"",
    password:"",
    tags: []
  },
  fetch: false,
  error: false,
}

//Reducer

  export default function CreateUserReducer( state = initialState, action) {
    
    switch(action.type)
    {

    case CREATE_USER:
      return Object.assign({},state, {fetch: true, error:false });

    case ADD_USER:
      return Object.assign({},state, {user: action.value, fetch: false, error:false });

    case FAILED_TO_CREATE_USER:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }
