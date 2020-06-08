import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudoForm.css';
import { Button, ButtonGroup } from 'react-bootstrap';


class KudoForm extends Component{

    state = this.props.kudo;
    LOGIN_DIV = "login-default";
    INPUT_SENDER = "inputSender-default";
    INPUT_RECEIVER = "inputReceiver-default";
    INPUT_MESSAGE = "inputMessage-default";
    TITLE_DIV = "title-default";
    BUTTON_DIV = "createButton-default"; 
    TEXT_AREA_MAX_LENGTH = 280;
    QTD_TYPED = 0;

    isValid = () => {

        console.log(this.state.layout);

        this.setState({error: ""});
        
        if (!this.state.sender) {
            this.setState({error: "Sender field cannot be blank!"});
            return false;
        }
        
        if (!this.state.receiver) {
            this.setState({error: "Receiver field cannot be blank!"});
            return false;
        }
        
        if (!this.state.message) {
            this.setState({error: "Message field cannot be blank!"});
            return false;
        }
        
        if (!this.state.layout) {
            this.setState({error: "Layout field cannot be blank!"});
            return false;
        }
        
        return true;
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {
            this.props.createKudo(this.state);
            this.setState(this.props.kudo);
        }
    };

    conso = () => {
       console.log(this.state.layout);
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
                        
                        <ButtonGroup aria-label="Basic example" onClick={event => {
                            this.setState({layout: event.target.value})
                            this.LOGIN_DIV = "login-" + this.state.layout;
                            this.INPUT_SENDER = "inputSender-" + this.state.layout;
                            this.INPUT_RECEIVER = "inputReceiver-" + this.state.layout;
                            this.INPUT_MESSAGE = "inputMessage-" + this.state.layout;
                            this.TITLE_DIV = "title-" + this.state.layout;
                            this.BUTTON_DIV = "createButton-" + this.state.layout; 
                            console.log(this.LOGIN_DIV);
                        }}>
                            <Button className="foto-greatJob" value= {GREAT_JOB} variant="secondary" ></Button>
                            <Button className="foto-congrats" value={CONGRATS}  variant="secondary"></Button>
                            <Button className="foto-veryAwesome" value={VERY_AWESOME} variant="secondary"></Button>
                            <Button className="foto-thankYou" value={THANK_YOU} variant="secondary"></Button>
                            <Button className="foto-staySafe" value={STAY_SAFE} variant="secondary"></Button>
                        </ButtonGroup>
                    </div>
                </div>
               
                <form method="post" noValidate>
                    <div className ={this.LOGIN_DIV}>
                        <div className={this.TITLE_DIV}>MagicKudos</div>
                        <div className="sub-title">Version 1.0</div>

                        <div className="fields">
                            <input id={this.INPUT_SENDER} placeholder="Sender" type="text" maxLength="20" value={this.state.sender} required onChange={event => this.setState({sender: event.target.value})}/>
                            <input id={this.INPUT_RECEIVER} placeholder="Receiver" type="text" maxLength="20" value={this.state.receiver} required onChange={event => this.setState({receiver: event.target.value})} />
                            <textarea id={this.INPUT_MESSAGE} placeholder="Type your message here" rows="7" cols="40" maxLength={this.TEXT_AREA_MAX_LENGTH} value={this.state.message} required 
                                onChange={event => {
                                    this.setState({message: event.target.value})
                                    this.QTD_TYPED =  event.target.value.length;
                            }}/>
                    <h5 className="qtdCaracteres">{this.QTD_TYPED}/{this.TEXT_AREA_MAX_LENGTH}</h5>
                            <button className={this.BUTTON_DIV} onClick={this.onSubmit}>Create Kudo</button>
                            <h5 className= "inputError">{this.state.error}</h5>
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