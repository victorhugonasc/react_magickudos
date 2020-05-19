import ApiService,{ API_SERVER } from "./ApiService";
import axios from 'axios';

const PATH = "/kudos";
const PARAMS = {};


test(" HTTP get request ", () => {
    
    jest.spyOn(axios,"get").mockImplementation(() => Promise.resolve(true));

    ApiService.doGet(PATH,PARAMS);

    expect(axios.get).toBeCalledWith(API_SERVER + PATH,PARAMS);

});