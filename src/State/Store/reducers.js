import {combineReducers} from 'redux';
import GetKudosReducers from '../Kudo/GetKudosReducer';
import CreateKudoReducer from '../Kudo/CreateKudoReducer'

export default combineReducers({
   getKudoReducer: GetKudosReducers,
   create : CreateKudoReducer,
});