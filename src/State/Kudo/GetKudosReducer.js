
import {FETCH_KUDOS, LOAD_KUDOS,UPDATE_KUDO,REQUEST_TO_UPDATE_KUDO,DELETE_KUDO,REQUEST_TO_REMOVE_KUDO,FAILED_KUDOS} from './GetKudosActions';


export const initialState = {
  kudos:[],
  fetch: false,
  update: false,
  delete: true,
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
      return Object.assign({},state, {update: true, error:false });

    case DELETE_KUDO:
      return Object.assign({},state, {delete: true, error:false });

    case REQUEST_TO_UPDATE_KUDO:
      var updated = updateArray(state.kudos, action.value.id);
      return Object.assign({},state, {kudos:updated, update: false, error:false,});

    case REQUEST_TO_REMOVE_KUDO:
      var filtered = removeFromArray(state.kudos, action.value.id);
      return Object.assign({},state, {kudos:filtered, delete: false, error:false,});  
      
    case FAILED_KUDOS:
      return Object.assign({},state, {fetch: false, error:true });
      
    default:
      return state;
  
    }

  }

  function removeFromArray(array, value) {
    return array.filter(function(element){
       return element.id !== value; 
    });
  }

  function updateArray(array, value) {
    return array.filter(function(element){
      if (element.id === value) {
        return value;
      } else {
        return element; 
      }
    });
  }
