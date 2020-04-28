import ApiService from '../ApiService'

const PATH = "/users"

class UserService{

    createUser(params){
        return ApiService.doPost(PATH,params);
    }
    
    getUsers(params){
        return ApiService.doGet(PATH,params);
    }
}

export default new UserService();