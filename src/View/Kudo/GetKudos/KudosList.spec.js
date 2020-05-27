import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KudosList from './KudosList';
import {fetchKudos} from '../../../State/Kudo/GetKudosActions';

configure({adapter: new Adapter() });

const KUDOS = [];

describe('<KudoForm />', () => {

    it('should match all column table name`s', () => {
      const SENDER = "Sender";
      const RECEIVER = "Receiver";
      const MESSAGE = "Message";
      const LAYOUT = "Layout";

      const wrapper = shallow(<KudosList kudos={KUDOS} fetchKudos={fetchKudos}/>);
      
      const sender = wrapper.find('th').at(0).text();
      const receiver = wrapper.find('th').at(1).text();
      const message = wrapper.find('th').at(2).text();
      const layout = wrapper.find('th').at(3).text();
  
      expect(sender).toEqual(SENDER);
      expect(receiver).toEqual(RECEIVER);
      expect(message).toEqual(MESSAGE);
      expect(layout).toEqual(LAYOUT);
    });
  
  });