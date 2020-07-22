import UserService from '../../App/Service/User/UserService';
import StoreService from '../../App/Service/Utils/StoreService';
import {getKudos} from '../../Routes';

export const CREATE_USER = "CREATE_USER";
export const ADD_USER = "ADD_USER";
export const FAILED_TO_CREATE_USER = "FAILED_TO_CREATE_USER";

export function createUser(user){
    
    UserService.createUser(user)
    .then( 
        () => {StoreService.dispatchAction(addUser(user));},
       (error) => {StoreService.dispatchAction(failedUser(error));}
    );

    return{
        type: CREATE_USER,
    }
}

export function addUser(user){
    window.location.href = process.env.REACT_APP_FRONTEND_DOMAIN + getKudos;
    return{
        type: ADD_USER,
        value: user,
    }
}

export function failedUser(error){
    return{
        type: FAILED_TO_CREATE_USER,
        value: error,
    }
}