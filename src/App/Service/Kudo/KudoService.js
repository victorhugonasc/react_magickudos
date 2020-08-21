import ApiService from '../ApiService'

const PATH = "/kudos"

class KudoService{

    createKudo(params){
        return ApiService.doPost(PATH,params);
    }
    
    getKudos(params){
        return ApiService.doGet(PATH,params);
    }

    updateKudo(params){
        return ApiService.doPut(PATH,params);
    }

    deleteKudo(params){
        return ApiService.doDelete(PATH,params);
    }
}

export default new KudoService();