import {combineReducers} from 'redux';
import GetKudosReducers from '../Kudo/GetKudosReducer';
import CreateKudoReducer from '../Kudo/CreateKudoReducer'
import CreateUserReducer from '../User/CreateUserReducer'

export default combineReducers({
   getKudoReducer: GetKudosReducers,
   create : CreateKudoReducer,
   createUser : CreateUserReducer,
});