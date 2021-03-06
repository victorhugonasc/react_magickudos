import { combineReducers } from 'redux';
import GetKudosReducers from '../Kudo/GetKudosReducer';
import GetUsersReducers from '../User/GetUsersReducer';
import CreateKudoReducer from '../Kudo/CreateKudoReducer';
import CreateUserReducer from '../User/CreateUserReducer';
import GetColorPalleteReducer from '../Color/GetColors/GetColorPalleteReducer';
import getHistoryReducer from '../../State/Team/GetHistoryReducer'

export default combineReducers({
   getKudoReducer: GetKudosReducers,
   create : CreateKudoReducer,
   createUser : CreateUserReducer,
   getUsers: GetUsersReducers,
   getColorReducer: GetColorPalleteReducer,
   historyState: getHistoryReducer
});