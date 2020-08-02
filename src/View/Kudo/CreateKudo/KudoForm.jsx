import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudoForm.css';
import { Button, ButtonGroup } from 'react-bootstrap';

class KudoForm extends Component{

    INICIAL_STATE = {
        login: "login-default",
        inputSender: "inputSender-default",
        inputReceiver: "inputReceiver-default",
        inputMessage: "inputMessage-default",
        title: "title-default",
        buttonDiv: "createButton-default",
        welcomeMsg: "Choose a Layout:",
        inputMaxLength: 70,
        messageMaxLength: 280,
        qtdTyped: 0,
        kudo: this.props.kudo
    };


    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }

    GREAT_JOB = "greatJob";
    VERY_AWESOME = "veryAwesome";
    THANK_YOU = "thankYou";
    CONGRATS = "congrats";
    STAY_SAFE = "staySafe";

    isValid = () => {

        if (!this.state.kudo.sender) {

            this.setState((prevState) => ({
                kudo: {
                    ...prevState.kudo,
                    error: "Sender field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.kudo.receiver) {

            this.setState((prevState) => ({
                kudo: {
                    ...prevState.kudo,
                    error: "Receiver field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.kudo.message) {

            this.setState((prevState) => ({
                kudo: {
                    ...prevState.kudo,
                    error: "Message field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.kudo.layout) {

            this.setState((prevState) => ({
                kudo: {
                    ...prevState.kudo,
                    error: "Layout field can't be empty!",
                }
            }));
            return false;
        }
        return true;
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {
            this.props.createKudo(this.state.kudo);
            this.setState(this.INICIAL_STATE);
        }
    };

    onClickComboBox = (value) => {

        var inicialMessage;
        switch(value) {
            case this.GREAT_JOB: inicialMessage = "GREAT JOB"; break;
            case this.VERY_AWESOME: inicialMessage = "VERY AWESOME"; break;
            case this.THANK_YOU: inicialMessage = "THANK YOU"; break;
            case this.CONGRATS: inicialMessage = "CONGRATULATIONS"; break;
            case this.STAY_SAFE: inicialMessage = "STAY SAFE"; break;
            default: break;
        }

        this.setState((prevState) => ({
            login: "login-" + value,
            inputSender: "inputSender-" + value,
            inputReceiver: "inputReceiver-" + value,
            inputMessage: "inputMessage-" + value,
            title: "title-" + value,
            buttonDiv: "createButton-" + value,
            kudo: {
                ...prevState.kudo,
                layout: value,
            },
            welcomeMsg : inicialMessage,
            
        }));
    };


    updateSender = (value) => {

        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                sender: value,
            }
        }));
    };

    updateReceiver = (value) => {

        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                receiver: value,
            }
        }));
    };

    updateMessageAndCounter = (value) => {
       
        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                message: value,
            },
            qtdTyped: value.length,

        }));
    };


    render()
    {
    
        return(

            <div>
                <form method="post" noValidate>

                    <div className ={this.state.login}>
                        <h5 className="form-welcome-msg">{this.state.welcomeMsg}</h5>
                        <div className="foto-table" >
                            <ButtonGroup aria-label="Basic example" onClick={event => this.onClickComboBox(event.target.value)}>
                                <Button className="foto-greatJob" value= {this.GREAT_JOB} variant="secondary" ></Button>
                                <Button className="foto-congrats" value={this.CONGRATS}  variant="secondary"></Button>
                                <Button className="foto-veryAwesome" value={this.VERY_AWESOME} variant="secondary"></Button>
                                <Button className="foto-thankYou" value={this.THANK_YOU} variant="secondary"></Button>
                                <Button className="foto-staySafe" value={this.STAY_SAFE} variant="secondary"></Button>
                            </ButtonGroup>
                        </div>
                        
                        <div className="fields">
                            <input id={this.state.inputSender} placeholder="Sender" type="text" maxLength={this.state.inputMaxLength} value={this.state.kudo.sender} required onChange={event => this.updateSender(event.target.value)}/>
                            <input id={this.state.inputReceiver} placeholder="Receiver" type="text" maxLength={this.state.inputMaxLength} value={this.state.kudo.receiver} required onChange={event => this.updateReceiver(event.target.value)} />
                            <textarea id={this.state.inputMessage} placeholder="Type your message here" rows="7" cols="40" maxLength={this.state.messageMaxLength} value={this.state.kudo.message} required onChange={event => this.updateMessageAndCounter(event.target.value)}/>
                            <h5 className="qtdCaracteres">{this.state.qtdTyped}/{this.state.messageMaxLength}</h5>
                            <button className={this.state.buttonDiv} onClick={this.onSubmit}>Post it!</button>
                            <h5 className= "inputError">{this.state.kudo.error}</h5>
                        </div>
                    </div>
                </form>
               
            </div>
        );
    }

}

KudoForm.propTypes = {
    kudo: PropTypes.object.isRequired,
    createKudo: PropTypes.func.isRequired
}

export default KudoForm;