import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserRow from './UserRow';

configure({adapter: new Adapter() });

const USER = {
    id: "id",
    name: "nameTest",
    user: "userTest",
    email: "emailTest",
    password: "passwordTest",
};

describe('<UserRow />', () => {

    it('should match all column table name`s', () => {
      const NAME = "nameTest";
      const USER_ = "userTest";
      const EMAIL = "emailTest";
      const PASSWORD = "passwordTest";

      const wrapper = shallow(<UserRow user={USER} key={USER.id}/>);
      
      const name = wrapper.find('td').at(0).text();
      const user = wrapper.find('td').at(1).text();
      const email = wrapper.find('td').at(2).text();
      const password = wrapper.find('td').at(3).text();
  
      expect(name).toEqual(NAME);
      expect(user).toEqual(USER_);
      expect(email).toEqual(EMAIL);
      expect(password).toEqual(PASSWORD);
    });

  });