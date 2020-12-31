import {FETCH_COLORS, LOAD_COLORS, FAILED_COLORS} from './GetColorPalleteActions';

export const inicialState = {
  pallete:[],
  fetch: false,
  error: false,
}

//Reducer
export default function GetColorPalleteReducer(state = inicialState, action) {
    switch(action.type)
    {
        case FETCH_COLORS:
            return Object.assign({}, state, {
                fetch: true,
                error: false
            });
 
        case LOAD_COLORS:
            return Object.assign({}, state, {
                pallete: action.value,
                fetch: false,
                error: false,
            });
        
        case FAILED_COLORS:
            return Object.assign({}, state, {
                fetch: false,
                error: true
            });
        
        default: return state;
    }
}
