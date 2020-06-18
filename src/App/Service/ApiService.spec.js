import ApiService from "./ApiService";
import {BACKEND_DOMAIN} from '../../Routes';
import axios from 'axios';

const PATH = "/kudos";
const PARAMS = {};


test(" HTTP get request ", () => {
    
    jest.spyOn(axios,"get").mockImplementation(() => Promise.resolve(true));

    ApiService.doGet(PATH,PARAMS);

    expect(axios.get).toBeCalledWith(BACKEND_DOMAIN + PATH,PARAMS);

});

test(" HTTP post request ", () => {
    
    jest.spyOn(axios,"post").mockImplementation(() => Promise.resolve(true));

    ApiService.doGet(PATH,PARAMS);

    expect(axios.get).toBeCalledWith(BACKEND_DOMAIN + PATH,PARAMS);

});