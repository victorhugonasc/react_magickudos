import axios from 'axios';

export default class ApiService {

    static doGet(path,params) {
       return ApiService.doRequest("get", path, params); 
    }

    static doPost(path,params){
        return ApiService.doRequest("post", path, params); 
    }

    static doPut(path,params){
        return ApiService.doRequest("put", path, params); 
    }

    static doRequest(httpMethod, path, params)
    {
        return axios[httpMethod](process.env.REACT_APP_BACKEND_DOMAIN + path, params).then(ApiService.handleSuccessCallBack).catch(ApiService.handleFailureCallBack);
    }

    static handleSuccessCallBack(response){
        return response.data;
    }

    static handleFailureCallBack(error){
        return Promise.reject(error);
    }

}