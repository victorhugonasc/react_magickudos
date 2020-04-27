import KudoService from '../../App/Service/Kudo/KudoService';
import StoreService from '../../App/Service/Utils/StoreService';


export const CREATE_KUDO = "CREATE_KUDO";
export const ADD_KUDO = "ADD_KUDO";
export const FAILED_TO_CREATE_KUDO = "FAILED_TO_CREATE_KUDO";

export function fetchKudo(kudo){
    console.log("Fetch Kudo");
    console.log(kudo);
    KudoService.createKudo(kudo)
    .then( 
        () => {StoreService.dispatchAction(addKudo(kudo));},
       // (error) => {StoreService.dispatchAction(failedKudo(error));}
    );

    return{
        type: CREATE_KUDO,
    }
}

export function addKudo(kudo){
    console.log("addKudo");
    console.log(kudo);
    return{
        type: ADD_KUDO,
        value: kudo,
    }
}

export function failedKudo(error){
    return{
        type: FAILED_TO_CREATE_KUDO,
        value: error,
    }
}