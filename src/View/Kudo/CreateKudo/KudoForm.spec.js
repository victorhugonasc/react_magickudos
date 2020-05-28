import React from 'react';
import { shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KudoForm from './KudoForm';
import {createKudo} from '../../../State/Kudo/CreateKudoActions'

configure({adapter: new Adapter() });

const KUDO = {
  sender: "senderTest",
  receiver: "receiverTest",
  message: "messageTest"
};

describe('<KudoForm />', () => {

  it('should match all input fields', () => {

    const SENDER = "senderTest";
    const RECEIVER = "receiverTest";
    const MESSAGE = "messageTest";
   
    const wrapper = shallow(<KudoForm kudo={KUDO} createKudo={createKudo}/>);
    
    const sender = wrapper.find('#inputSender').props().value;
    const receiver = wrapper.find('#inputReceiver').props().value;
    const message = wrapper.find('#inputMessage').props().value;
    
    expect(sender).toEqual(SENDER);
    expect(receiver).toEqual(RECEIVER);
    expect(message).toEqual(MESSAGE);
  });
 
  it('should match all placeholders', () => {

    const SENDER = "sender";
    const RECEIVER = "receiver";
    const MESSAGE = "message";
   
    const wrapper = shallow(<KudoForm kudo={KUDO} createKudo={createKudo}/>);
    
    const sender = wrapper.find('#inputSender').props().placeholder;
    const receiver = wrapper.find('#inputReceiver').props().placeholder;
    const message = wrapper.find('#inputMessage').props().placeholder;
   
    expect(sender).toEqual(SENDER);
    expect(receiver).toEqual(RECEIVER);
    expect(message).toEqual(MESSAGE);
  });

  it('should match options names and length', () => {
   
    const wrapper = shallow(<KudoForm kudo={KUDO} createKudo={createKudo}/>);
   
    const optionDefault = wrapper.find('option').at(0).props().value;
    const optionGreatJob = wrapper.find('option').at(1).props().value;
    const optionVeryAweSome = wrapper.find('option').at(2).props().value;
    const optionThankYou = wrapper.find('option').at(3).props().value;
    const optionCongrats = wrapper.find('option').at(4).props().value;
    const optionStaySafe = wrapper.find('option').at(5).props().value;

    expect(wrapper.find('option')).toHaveLength(6);
    expect(optionDefault).toBe("Default");
    expect(optionGreatJob).toBe("greatJob");
    expect(optionVeryAweSome).toBe("veryAwesome");
    expect(optionThankYou).toBe("thankYou");
    expect(optionCongrats).toBe("congrats");
    expect(optionStaySafe).toBe("staySafe");
   
  });

  it('should simulate onClick ', () => {
   
    const wrapper = shallow(<KudoForm kudo={KUDO} createKudo={createKudo}/>);
    const event = Object.assign({preventDefault: () => {}})
    wrapper.find('button').simulate('click',event);
   
  });

});

