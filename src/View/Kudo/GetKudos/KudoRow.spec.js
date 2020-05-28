import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KudosRow from './KudoRow';

configure({adapter: new Adapter() });

const KUDO = {
    id: "id",
    sender: "senderTest",
    receiver: "receiverTest",
    message: "messageTest",
    layout: "layoutTest",
};

describe('<KudosRow />', () => {

    it('should match all column table name`s', () => {
      const SENDER = "senderTest";
      const RECEIVER = "receiverTest";
      const MESSAGE = "messageTest";
      const LAYOUT = "layoutTest";

      const wrapper = shallow(<KudosRow kudo={KUDO} key={KUDO.id}/>);
      
      const sender = wrapper.find('td').at(0).text();
      const receiver = wrapper.find('td').at(1).text();
      const message = wrapper.find('td').at(2).text();
      const layout = wrapper.find('td').at(3).text();
  
      expect(sender).toEqual(SENDER);
      expect(receiver).toEqual(RECEIVER);
      expect(message).toEqual(MESSAGE);
      expect(layout).toEqual(LAYOUT);
    });

  });