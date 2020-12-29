import ColorService from '../../../App/Service/Color/ColorService';
import StoreService from '../../../App/Service/Utils/StoreService';

export const FETCH_COLORS = "FETCH_COLORS";
export const LOAD_COLORS = "LOAD_COLORS";
export const FAILED_COLORS = "FAILED_COLORS";

export function fetchColorPallete(){
    ColorService.getAllColorsPallete()
    .then( 
        (data) => {StoreService.dispatchAction(loadColorPallete(data));},
        (error) => {StoreService.dispatchAction(failedColorPalleteRequest(error));}
    );
    return{
        type: FETCH_COLORS,
    }
}

export function loadColorPallete(colorPallete) {
    console.log(colorPallete);
    return{
        type: LOAD_COLORS,
        value: colorPallete,
    }
}

export function failedColorPalleteRequest(error){
    return{
        type: FAILED_COLORS,
        value: error,
    }
}