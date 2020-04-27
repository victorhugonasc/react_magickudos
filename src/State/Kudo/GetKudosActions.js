import KudoService from '../../App/Service/Kudo/KudoService';
import StoreService from '../../App/Service/Utils/StoreService';


export const FETCH_KUDOS = "FETCH_KUDOS";
export const LOAD_KUDOS = "LOAD_KUDOS";
export const FAILED_KUDOS = "FAILED_KUDOS";


export function fetchKudos(){

    KudoService.getKudos()
    .then( 
        (data) => {StoreService.dispatchAction(loadKudos(data));},
        (error) => {StoreService.dispatchAction(failedKudos(error));}
    );

    return{
        type: FETCH_KUDOS,
    }
}

export function loadKudos(kudos){
   
    return{
        type: LOAD_KUDOS,
        value: kudos,
    }
}

export function failedKudos(error){
    return{
        type: FAILED_KUDOS,
        value: error,
    }
}