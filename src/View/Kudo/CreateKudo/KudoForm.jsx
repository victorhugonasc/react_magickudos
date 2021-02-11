import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudoForm.css';
import { Button, ButtonGroup } from 'react-bootstrap';

class KudoForm extends Component{

    INICIAL_STATE = {
        inputMaxLength: 70,
        messageMaxLength: 280,
        qtdTyped: 0,
        kudo: this.props.kudo,
        types: ["greatJob", "congrats", "veryAwesome", "thankYou", "staySafe"],
    };

    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }

    componentDidMount() {
        this.props.fetchColorPallete();
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
        const pallete = this.props.pallete.filter(color => color.kudosType === value);
        const colorPallete = pallete[0];
        this.setState({ colorPallete });
        this.updateLayout(value);
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

    updateLayout = (value) => {
        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                layout: value,
            },
        }));
    };

    render()
    {
        return(
        <div className="central">
                <form method="post" noValidate>
                {this.state.colorPallete &&
                    <div className="login" style={{
                        background: this.state.colorPallete.logoImage,
                        boxShadow: `0px 0px 500px 500px ${this.state.colorPallete.loginBoxShallow}`,
                    }}>
                        <h5 className="form-welcome-msg">{this.state.colorPallete.headerMessage}</h5>
                        <div className="foto-table">
                            <ButtonGroup aria-label="Basic example" onClick={event => this.onClickComboBox(event.target.value)}>
                                {this.state.types.map((type,key) => { 
                                    return <Button className={`foto-${type}`} value={type} key={key} variant="secondary" ></Button>
                                })}
                            </ButtonGroup>
                        </div>
                        <div className="fields">
                            <input placeholder="Sender" type="text" required maxLength={this.state.inputMaxLength} value={this.state.kudo.sender}
                                onChange={event => this.updateSender(event.target.value)} style={{
                                    boxShadow: `0px 0px 8px 8px ${this.state.colorPallete.fieldsBoxShallow}`,
                                }}
                            />
                            <input placeholder="Receiver" type="text" required maxLength={this.state.inputMaxLength} value={this.state.kudo.receiver}
                                onChange={event => this.updateReceiver(event.target.value)} style={{
                                    boxShadow: `0px 0px 8px 8px ${this.state.colorPallete.fieldsBoxShallow}`,
                                }}
                            />
                        </div>
                        <div className="centralize">
                            <textarea className="textAreaInput" placeholder="Type your message here" rows="7" cols="40" required
                                maxLength={this.state.messageMaxLength} value={this.state.kudo.message} onChange={event => this.updateMessageAndCounter(event.target.value)} style={{
                                    boxShadow: `0px 0px 8px 8px ${this.state.colorPallete.fieldsBoxShallow}`,
                                }}
                            />
                        </div>
                        <h5 className="qtdCaracteres">{this.state.qtdTyped}/{this.state.messageMaxLength}</h5>
                        <div className="centralize">
                            <button className="button--create" onClick={this.onSubmit} style={{
                                background: this.state.colorPallete.button,
                                color: this.state.colorPallete.buttonText
                            }}>Post it!</button>
                        </div>
                        <h5 className= "inputError">{this.state.kudo.error}</h5>
                    </div>
                }
                    
                    {!this.state.colorPallete &&
                    <div className="login" style={{
                        background: "#ecf0f3",
                        boxShadow: `0px 0px 500px 500px #cbced1`,
                    }}> 
                        <h5 className="form-welcome-msg">Choose a Layout:</h5>
                        <div className="foto-table" >
                        <ButtonGroup aria-label="Basic example" onClick={event => this.onClickComboBox(event.target.value)}>
                                <Button className="foto-greatJob" value= "greatJob" variant="secondary" ></Button>
                                <Button className="foto-congrats" value="congrats"  variant="secondary"></Button>
                                <Button className="foto-veryAwesome" value="veryAwesome" variant="secondary"></Button>
                                <Button className="foto-thankYou" value="thankYou" variant="secondary"></Button>
                                <Button className="foto-staySafe" value="staySafe" variant="secondary"></Button>
                        </ButtonGroup>
                        </div>
                    </div>
                }
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