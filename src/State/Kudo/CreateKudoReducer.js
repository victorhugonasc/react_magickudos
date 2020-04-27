
import {CREATE_KUDO,ADD_KUDO,FAILED_TO_CREATE_KUDO} from './CreateKudoActions';


export const initialState = {
  kudo:{
    sender:"",
    receiver:"",
    message:"",
    layout:"",
  },
  fetch: false,
  error: false,
}

//Reducer

  export default function CreateKudoReducer( state = initialState, action) {
    
    switch(action.type)
    {

    case CREATE_KUDO:
      return Object.assign({},state, {fetch: true, error:false });

    case ADD_KUDO:
      return Object.assign({},state, {kudo: action.value, fetch: false, error:false });

    case FAILED_TO_CREATE_KUDO:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }
