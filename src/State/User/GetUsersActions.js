import KudoService from '../../App/Service/User/UserService';
import StoreService from '../../App/Service/Utils/StoreService';


export const FETCH_USERS = "FETCH_USERS";
export const LOAD_USERS = "LOAD_USERS";
export const FAILED_USERS = "FAILED_USERS";


export function fetchUsers(){

    KudoService.getUsers()
    .then( 
        (data) => {StoreService.dispatchAction(loadUsers(data));},
        (error) => {StoreService.dispatchAction(failedUsers(error));}
    );

    return{
        type: FETCH_USERS,
    }
}

export function loadUsers(users){
   
    return{
        type: LOAD_USERS,
        value: users,
    }
}

export function failedUsers(error){
    return{
        type: FAILED_USERS,
        value: error,
    }
}