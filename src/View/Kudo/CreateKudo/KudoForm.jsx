import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudoForm.css';
import { Button, ButtonGroup } from 'react-bootstrap';


class KudoForm extends Component{


    constructor (props) {
        super(props);

        this.state = {
            login: "login-default",
            inputSender: "inputSender-default",
            inputReceiver: "inputReceiver-default",
            inputMessage: "inputMessage-default",
            title: "title-default",
            buttonDiv: "createButton-default",
            maxLength: 280,
            qtdTyped: 0,
            kudo: this.props.kudo

        }
    }
    
    //state = this.props.kudo;
    
    
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

    onClickComboBox = (event) => {
       

        this.setState((prevState) => ({
            login: "login-" + event,
            inputSender: "inputSender-" + event,
            inputReceiver: "inputReceiver-" + event,
            inputMessage: "inputMessage-" + event,
            title: "title-" + event,
            buttonDiv: "createButton-" + event,
        }), () => { console.log('callback',this.state)});

    };
    render()
    {
        console.log(this.state);
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
                            <input id={this.state.inputSender} placeholder="Sender" type="text" maxLength="20" value={this.state.sender} required onChange={event => this.setState({sender: event.target.value})}/>
                            <input id={this.state.inputReceiver} placeholder="Receiver" type="text" maxLength="20" value={this.state.receiver} required onChange={event => this.setState({receiver: event.target.value})} />
                            <textarea id={this.state.inputMessage} placeholder="Type your message here" rows="7" cols="40" maxLength={this.state.maxLength} value={this.state.message} required 
                                onChange={event => {
                                    this.setState((prevState) => ({
                                        /*message: event.target.value,*/
                                        qtdTyped: prevState.qtdTyped + 1,
                                        
                                    }), () => { console.log('event',this.state)});
                                    
                            }}/>
                    <h5 className="qtdCaracteres">{this.state.qtdTyped}/{this.state.maxLength}</h5>
                            <button className={this.state.buttonDiv} onClick={this.onSubmit}>Create Kudo</button>
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