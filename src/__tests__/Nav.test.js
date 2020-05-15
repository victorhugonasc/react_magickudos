import React from "react";
import { shallow } from "enzyme";
import {Nav} from '../Nav';

it('should adress the right path and match home page', () =>{
    const wrapper = shallow(<Nav />);
    const minorWrapper = wrapper.shallow(<Link />);
    const result = minorWrapper.find('Link.home').text();
    
    expect(result).toBe("/");
});

it('should adress the right path and match home page', () =>{
    const wrapper = shallow(<Nav />);
    const minorWrapper = wrapper.shallow(<Link />);
    const result = minorWrapper.find('Link.createUsers').text();
    
    expect(result).toBe("/createUsers");
});

it('should adress the right path and match home page', () =>{
    const wrapper = shallow(<Nav />);
    const minorWrapper = wrapper.shallow(<Link />);
    const result = minorWrapper.find('Link.getUsers').text();
    
    expect(result).toBe("/getUsers");
});

it('should adress the right path and match home page', () =>{
    const wrapper = shallow(<Nav />);
    const minorWrapper = wrapper.shallow(<Link />);
    const result = minorWrapper.find('Link.createKudos').text();
    
    expect(result).toBe("/createKudos");
});

it('should adress the right path and match home page', () =>{
    const wrapper = shallow(<Nav />);
    const minorWrapper = wrapper.shallow(<Link />);
    const result = minorWrapper.find('Link.getKudos').text();
    
    expect(result).toBe("/getKudos");
});


//testar os textos ?