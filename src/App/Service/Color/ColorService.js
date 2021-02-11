import ApiService from '../ApiService'

const PATH = "/colors"

class ColorService{

    createColorPallete(params){
        return ApiService.doPost(PATH,params);
    }
    
    getAllColorsPallete(params){
        return ApiService.doGet(PATH,params);
    }

    updateColorPallete(params){
        return ApiService.doPut(PATH,params);
    }

    deleteColorPallete(params){
        return ApiService.doDelete(PATH,params);
    }
}

export default new ColorService();