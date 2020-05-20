import UserService from "./UserService";
import ApiService from '../ApiService'

const PATH = "/users";
const PARAMS = {};


test("Create user service", () => {

    jest.spyOn(ApiService,"doPost").mockImplementation(() => Promise.resolve(true));

    UserService.createUser(PARAMS);

    expect(ApiService.doPost).toBeCalledWith(PATH,PARAMS);

});

test("Get users service", () => {

    jest.spyOn(ApiService,"doGet").mockImplementation(() => Promise.resolve(true));

    UserService.getUsers(PARAMS);

    expect(ApiService.doGet).toBeCalledWith(PATH,PARAMS);

});
