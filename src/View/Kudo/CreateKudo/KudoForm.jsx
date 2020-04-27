import React, { Component } from 'react';

class KudoForm extends Component{

    state = this.props.kudo;

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render()
    {
        const kudo = this.state;
    
        return(
         
                <form method="post" noValidate>
                    <input placeholder="sender" type="text" value={this.state.sender} required onChange={event => this.setState({sender: event.target.value})}/><br/>
                    <input placeholder="receiver" type="text" value={this.state.receiver} required onChange={event => this.setState({receiver: event.target.value})} /><br/>
                    <input placeholder="message" type="text" value={this.state.message} required onChange={event => this.setState({message: event.target.value})} /><br/>
                
                    <select id="selectLayout"  defaultValue={"Default"} onChange={event => this.setState({layout: event.target.value})}>
                        <option value="Default" disabled>Layout</option>
                        <option value="greatJob">Great Job</option>
                        <option value="veryAwesome" defaultValue>Very Awesome</option>
                        <option value="thankYou">Thank You</option>
                        <option value="congrats">Congratulations</option>
                        <option value="staySafe">Stay Safe</option>
                    </select>
                    <br/><button onClick={() => this.onSubmit(event)}>Create Kudo</button>
                    
                    <div>
                        <h4>Sender: {kudo.sender} </h4>
                        <h4>Receiver: {kudo.receiver} </h4>
                        <h4>Message: {kudo.message} </h4>
                        <h4>Layout: {kudo.layout} </h4>
                    </div>

                </form>

        );
    }KudosList

}

export default KudoForm;