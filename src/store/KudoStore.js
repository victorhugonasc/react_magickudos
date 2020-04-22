
import {createStore} from 'redux';
import {rootReducer} from '../reducers/KudoReducer'


//Store
export const store = createStore(
    rootReducer,
  );



