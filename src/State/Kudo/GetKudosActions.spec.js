import {FETCH_KUDOS,LOAD_KUDOS,FAILED_KUDOS} from './GetKudosActions';
import {fetchKudos,loadKudos,failedKudos} from './GetKudosActions';
import KudoService from '../../App/Service/Kudo/KudoService';

const KUDO = {
    sender:"",
    receiver:"",
    message:"",
    layout:"",
};

const ERROR = {};

describe('Get kudos actions', () => {

    test('should create an action to Get kudos', () => {

        const serviceSpy = jest.spyOn(KudoService,"getKudos").mockImplementation(() => Promise.resolve(true));
        
        const expectedAction = {
          type: FETCH_KUDOS,
        };
      
        expect(fetchKudos()).toEqual(expectedAction);
        expect(serviceSpy).toBeCalled();
        
    });


    test('should create an action to Load kudos', () => {
  
        const expectedAction = {
            type: LOAD_KUDOS,
            value: KUDO
        };
        expect(loadKudos(KUDO)).toEqual(expectedAction);
    });

    test('should create an action to Failed kudos', () => {
        const expectedAction = {
            type: FAILED_KUDOS,
            value: ERROR
        };
        expect(failedKudos(ERROR)).toEqual(expectedAction);
    });


});
