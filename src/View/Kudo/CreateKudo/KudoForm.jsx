import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudoForm.scss';


class KudoForm extends Component{

    state = this.props.kudo;

    isValid = () => {

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

    render()
    {
        const GREAT_JOB = "greatJob";
        const VERY_AWESOME = "veryAwesome";
        const THANK_YOU = "thankYou";
        const CONGRATS = "congrats";
        const STAY_SAFE = "staySafe";
        
        return(
         
            <form method="post" noValidate>
                <select id="selectLayout"  defaultValue={"default"} onChange={event => this.setState({layout: event.target.value})}>
                    <option value="default" disabled >Layout</option>
                    <option value= {GREAT_JOB}>Great Job</option>
                    <option value={VERY_AWESOME}>Very Awesome</option>
                    <option value={THANK_YOU}>Thank You</option>
                    <option value={CONGRATS}>Congratulations</option>
                    <option value={STAY_SAFE}>Stay Safe</option>
                </select><br/>

                <input id="inputSender" placeholder="sender" type="text" value={this.state.sender} required onChange={event => this.setState({sender: event.target.value})}/><br/>
                <input id="inputReceiver" placeholder="receiver" type="text" value={this.state.receiver} required onChange={event => this.setState({receiver: event.target.value})} /><br/>
                <input id="inputMessage" placeholder="message" type="text" maxLength="200" value={this.state.message} required onChange={event => this.setState({message: event.target.value})} /><br/>
            
                
                <br/><button onClick={this.onSubmit}>Create Kudo</button>
                <div><h2>{this.state.error}</h2></div>
               
            </form>

        );
    }

}

KudoForm.propTypes = {
    kudo: PropTypes.object.isRequired,
    createKudo: PropTypes.func.isRequired
}

export default KudoForm;