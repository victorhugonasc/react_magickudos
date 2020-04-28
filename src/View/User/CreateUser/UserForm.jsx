import React, { Component } from 'react';

class UserForm extends Component{

    state = this.props.user;

    isValid = () => {

        this.setState({error: ""});
        
        if (!this.state.name) {
            this.setState({error: "Name field cannot be blank!"});
            return false;
        }
        
        if (!this.state.user) {
            this.setState({error: "User field cannot be blank!"});
            return false;
        }
        
        if (!this.state.email) {
            this.setState({error: "Email field cannot be blank!"});
            return false;
        }
        
        if (!this.state.password) {
            this.setState({error: "Password field cannot be blank!"});
            return false;
        }
        
        return true;
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {
            this.props.onSubmit(this.state);
        }
    };

    render()
    {
        const user = this.state;
       
        return(
         
                <form method="post" noValidate>
                    <input placeholder="name" type="text" value={this.state.name} required onChange={event => this.setState({name: event.target.value})}/><br/>
                    <input placeholder="user" type="text" value={this.state.user} required onChange={event => this.setState({user: event.target.value})} /><br/>
                    <input placeholder="email" type="text" value={this.state.email} required onChange={event => this.setState({email: event.target.value})} /><br/>
                    <input placeholder="password" type="password" value={this.state.password} required onChange={event => this.setState({password: event.target.value})} /><br/>
              
                    <br/><button onClick={() => this.onSubmit(event)}>Create User</button>
                    <div><h2>{this.state.error}</h2></div>
                    <div>
                        <h4>Sender: {user.name} </h4>
                        <h4>Receiver: {user.user} </h4>
                        <h4>Message: {user.email} </h4>
                        <h4>Layout: {user.password} </h4>
                    </div>
                </form>
        );
    }
}

export default UserForm;