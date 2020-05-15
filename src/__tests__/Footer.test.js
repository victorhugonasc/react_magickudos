import React from "react";
import { shallow } from "enzyme";
import {Footer} from '../Footer';

describe('test1', () => {
    it('should adress the right path and match the name', () =>{     
         const wrapper = shallow(<Footer/>);
         const span = wrapper.find("span");
         const result = span.text();
     
         expect(result).toBe("Test Jest Enzyme");
     });
});



