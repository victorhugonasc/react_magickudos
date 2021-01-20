import { FETCH_TEAMS, LOAD_TEAMS, FAILED_TEAMS } from './GetHistoryActions';

const inicialState = {
  teams:[],
  fetch: false,
  error: false,
}

//Reducer
export default function getHistoryReducer( state = inicialState, action) {
  switch(action.type) {
    
    case FETCH_TEAMS:
    return Object.assign({}, state, {
      fetch: true,
      error: false
    });

    case LOAD_TEAMS:
    return Object.assign({}, state, {
      teams: action.value,
      fetch: false,
      error: false,
    });
      
    case FAILED_TEAMS:
    return Object.assign({}, state, {
      fetch: false,
      error: true
    });
        
    default: return state;
  }
}