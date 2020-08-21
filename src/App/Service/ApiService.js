import axios from 'axios';

export default class ApiService {

    static doGet(path,params) {
       return ApiService.doRequest("get", path, params); 
    }

    static doPost(path,params){//[PT-BR] nesse caso, params eh o body da requisicao.   //[EN-US] In the case, params is the request's body 
        return ApiService.doRequestWithBody("post", path, params); 
    }

    static doPut(path,params){
        console.log('params put',params);
        return ApiService.doRequest("put", path, params); 
    }

    static doDelete(path,params){
        return ApiService.doRequest("delete", path, params); 
    }

    static doRequest(httpMethod, path, params)
    {
        if(params) {
            return axios[httpMethod](process.env.REACT_APP_BACKEND_DOMAIN + path + '/' + params.id,params).then(ApiService.handleSuccessCallBack).catch(ApiService.handleFailureCallBack);
        }

        else{
            return axios[httpMethod](process.env.REACT_APP_BACKEND_DOMAIN + path).then(ApiService.handleSuccessCallBack).catch(ApiService.handleFailureCallBack);
        }
        
    }

    static doRequestWithBody(httpMethod, path, body)
    {
        return axios[httpMethod](process.env.REACT_APP_BACKEND_DOMAIN + path, body).then(ApiService.handleSuccessCallBack).catch(ApiService.handleFailureCallBack);
    }

    static handleSuccessCallBack(response){
        return response.data;
    }

    static handleFailureCallBack(error){
        return Promise.reject(error);
    }

}