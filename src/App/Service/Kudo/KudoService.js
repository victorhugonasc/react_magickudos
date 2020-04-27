import ApiService from '../ApiService'

const PATH = "/kudos"

class KudoService{

    createKudo(params){
        return ApiService.doPost(PATH,params);
    }
    
    getKudos(params){
        return ApiService.doGet(PATH,params);
    }
}

export default new KudoService();