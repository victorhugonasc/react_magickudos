import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UsersList from './UsersList';
import {fetchUsers} from '../../../State/User/GetUsersActions';

configure({adapter: new Adapter() });

const USERS = [];

describe('<KudoForm />', () => {

    it('should match all column table name`s', () => {
      const NAME = "Name";
      const USER_ = "User";
      const EMAIL = "Email";
      const PASSWORD = "Password";

      const wrapper = shallow(<UsersList users={USERS} fetchUsers={fetchUsers}/>);
      
      const name = wrapper.find('th').at(0).text();
      const user = wrapper.find('th').at(1).text();
      const email = wrapper.find('th').at(2).text();
      const password = wrapper.find('th').at(3).text();

      expect(name).toEqual(NAME);
      expect(user).toEqual(USER_);
      expect(email).toEqual(EMAIL);
      expect(password).toEqual(PASSWORD);
    });

  });