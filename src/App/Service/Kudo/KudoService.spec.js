import KudoService from "./KudoService";
import ApiService from '../ApiService'

const PATH = "/kudos";
const PARAMS = {};


test("Create kudo service", () => {

    jest.spyOn(ApiService,"doPost").mockImplementation(() => Promise.resolve(true));

    KudoService.createKudo(PARAMS);

    expect(ApiService.doPost).toBeCalledWith(PATH,PARAMS);

});

test("Get kudos service", () => {

    jest.spyOn(ApiService,"doGet").mockImplementation(() => Promise.resolve(true));

    KudoService.getKudos(PARAMS);

    expect(ApiService.doGet).toBeCalledWith(PATH,PARAMS);

});
