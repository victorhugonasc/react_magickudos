import KudoService from '../../App/Service/Kudo/KudoService';
import StoreService from '../../App/Service/Utils/StoreService';

export const FETCH_KUDOS = "FETCH_KUDOS";
export const LOAD_KUDOS = "LOAD_KUDOS";
export const UPDATE_KUDO = "UPDATE_KUDO";
export const REQUEST_TO_UPDATE_KUDO = "REQUEST_TO_UPDATE_KUDO";
export const DELETE_KUDO = "DELETE_KUDO";
export const REQUEST_TO_REMOVE_KUDO = "REQUEST_TO_REMOVE_KUDO";
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

export function updateKudo(kudo){

    KudoService.updateKudos(kudo)
    .then( 
        () => {StoreService.dispatchAction(requestToUpdateKudo(kudo));},
        (error) => {StoreService.dispatchAction(failedKudos(error));}
    );

    return{
        type: UPDATE_KUDO,
    }
}

export function requestToUpdateKudo(kudo){
   
    return{
        type: REQUEST_TO_UPDATE_KUDO,
        value: kudo,
    }
}

export function deleteKudo(kudo){

    KudoService.deleteKudo(kudo.id)
    .then( 
        () => {StoreService.dispatchAction(removeKudo(kudo));},
        (error) => {StoreService.dispatchAction(failedKudos(error));}
    );

    return{
        type: DELETE_KUDO,
    }
}

export function removeKudo(kudo){
   
    return{
        type: REQUEST_TO_REMOVE_KUDO,
        value: kudo,
    }
}


export function failedKudos(error){
    return{
        type: FAILED_KUDOS,
        value: error,
    }
}