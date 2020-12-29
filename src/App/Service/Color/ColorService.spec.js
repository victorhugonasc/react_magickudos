import ColorService from "./ColorService";
import ApiService from '../ApiService'

const PATH = "/colors";
const PARAMS = {};


test("Create color pallete service", () => {

    jest.spyOn(ApiService,"doPost").mockImplementation(() => Promise.resolve(true));

    ColorService.createColorPallete(PARAMS);

    expect(ApiService.doPost).toBeCalledWith(PATH,PARAMS);

});

test("Get color pallete service", () => {

    jest.spyOn(ApiService,"doGet").mockImplementation(() => Promise.resolve(true));

    ColorService.getAllColorsPallete(PARAMS);

    expect(ApiService.doGet).toBeCalledWith(PATH,PARAMS);

});
