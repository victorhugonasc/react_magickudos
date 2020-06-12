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
        maxLength: 280,
        qtdTyped: 0,
        kudo: this.props.kudo
    };


    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }

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
            }
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
        const GREAT_JOB = "greatJob";
        const VERY_AWESOME = "veryAwesome";
        const THANK_YOU = "thankYou";
        const CONGRATS = "congrats";
        const STAY_SAFE = "staySafe";
        
        return(

            <div>
                <div>
                    <h5 className="form-welcome-msg">Choose a layout:</h5>
                    <div className="foto-table" >
                        <ButtonGroup aria-label="Basic example" onClick={event => this.onClickComboBox(event.target.value)}>
                            <Button className="foto-greatJob" value= {GREAT_JOB} variant="secondary" ></Button>
                            <Button className="foto-congrats" value={CONGRATS}  variant="secondary"></Button>
                            <Button className="foto-veryAwesome" value={VERY_AWESOME} variant="secondary"></Button>
                            <Button className="foto-thankYou" value={THANK_YOU} variant="secondary"></Button>
                            <Button className="foto-staySafe" value={STAY_SAFE} variant="secondary"></Button>
                        </ButtonGroup>
                    </div>
                </div>
               
                <form method="post" noValidate>
                    <div className ={this.state.login}>
                        <div className={this.state.title}>MagicKudos</div>
                        <div className="sub-title">Version 1.0</div>
                        <div className="fields">
                            <input id={this.state.inputSender} placeholder="Sender" type="text" maxLength="20" value={this.state.kudo.sender} required onChange={event => this.updateSender(event.target.value)}/>
                            <input id={this.state.inputReceiver} placeholder="Receiver" type="text" maxLength="20" value={this.state.kudo.receiver} required onChange={event => this.updateReceiver(event.target.value)} />
                            <textarea id={this.state.inputMessage} placeholder="Type your message here" rows="7" cols="40" maxLength={this.state.maxLength} value={this.state.kudo.message} required onChange={event => this.updateMessageAndCounter(event.target.value)}/>
                            <h5 className="qtdCaracteres">{this.state.qtdTyped}/{this.state.maxLength}</h5>
                            <button className={this.state.buttonDiv} onClick={this.onSubmit}>Create Kudo</button>
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