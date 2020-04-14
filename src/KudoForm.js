import React from 'react';

const initialState = {
    sender: "",
    receiver: "",
    message: "",
    layout: "",
    error: "",
}


export default class Form extends React.Component{

    state = initialState;

    validade = () =>{

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
            this.setState({error: "Email field cannot be blank!"});
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
        const isValid = this.validade();

        if (isValid) {
            this.props.onSubmitKudo(this.state);
            this.setState(initialState);
        }
    };

    render()
    {
        return(

            <form method="post">
                <input placeholder="sender" type="text" value={this.state.sender} onChange={event => this.setState({sender: event.target.value})}/><br/>
                <input placeholder="receiver" type="text" value={this.state.receiver} onChange={event => this.setState({receiver: event.target.value})} /><br/>
                <input placeholder="message" type="text" value={this.state.message} onChange={event => this.setState({message: event.target.value})} /><br/>
               
                <select id="selectLayout"  defaultValue={"Default"} onChange={event => this.setState({layout: event.target.value})}>
                    <option value="Default" disabled>Layout</option>
                    <option value="greatJob">Great Job</option>
                    <option value="veryAwesome" defaultValue>Very Awesome</option>
                    <option value="thankYou">Thank You</option>
                    <option value="congrats">Congratulations</option>
                    <option value="staySafe">Stay Safe</option>
                </select>
                <br/><button onClick={() => this.onSubmit(event)}>Create Kudo</button>
                <br/><div>{this.state.error}</div>
            </form>

        
        
                       
        );
    }

}