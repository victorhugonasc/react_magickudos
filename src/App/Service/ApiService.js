import axios from 'axios';

const API_SERVER = "http://localhost:8080"


export default class ApiService {


    static doGet(path,params) {
        
       return ApiService.doRequest("get", path, params); 
    }

    static doPost(path,params){
        return ApiService.doRequest("post", path, params); 
    }

    static doRequest(httpMethod, path, params)
    {
        console.log("params: ");
        console.log(params);
        return axios[httpMethod](API_SERVER + path, params).then(ApiService.handleSuccessCallBack).catch(ApiService.handleFailureCallBack);
       
    }

    static handleSuccessCallBack(response){
        console.log("eh esse cara");
        console.log(response.data);
        return response.data;
    }

    static handleFailureCallBack(error){
        return Promise.reject(error);
    }

}