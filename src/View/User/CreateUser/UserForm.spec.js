import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserForm from './UserForm';
import {createUser} from '../../../State/User/CreateUserActions';


configure({adapter: new Adapter() });

const USER = {
    name: "nameTest",
    user: "userTest",
    email: "emailTest",
    password: "passTest"
};

describe('<KudoForm />', () => {

    it('should match all input fields', () => {
        const NAME = "nameTest";
        const USER_ = "userTest";
        const EMAIL = "emailTest";
        const PASSWORD = "passTest";
        
        const wrapper = shallow(<UserForm user={USER} createUser={createUser}/>);
        
        const name = wrapper.find('#inputName').props().value;
        const user = wrapper.find('#inputUser').props().value;
        const email = wrapper.find('#inputEmail').props().value;
        const password = wrapper.find('#inputPassword').props().value;

        expect(name).toEqual(NAME);
        expect(user).toEqual(USER_);
        expect(email).toEqual(EMAIL);
        expect(password).toEqual(PASSWORD);

    });

    it('should match all placeholders', () => {
        const NAME = "name";
        const USER_ = "user";
        const EMAIL = "email";
        const PASSWORD = "password";
        
        const wrapper = shallow(<UserForm user={USER} createUser={createUser}/>);
        
        const name = wrapper.find('#inputName').props().placeholder;
        const user = wrapper.find('#inputUser').props().placeholder;
        const email = wrapper.find('#inputEmail').props().placeholder;
        const password = wrapper.find('#inputPassword').props().placeholder;

        expect(name).toEqual(NAME);
        expect(user).toEqual(USER_);
        expect(email).toEqual(EMAIL);
        expect(password).toEqual(PASSWORD);

    });

    it('should simulate onClick ', () => {
   
        const wrapper = shallow(<UserForm user={USER} createUser={createUser}/>);
        const event = Object.assign({preventDefault: () => {}})
        wrapper.find('button').simulate('click',event);
       
      });

});