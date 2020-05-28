import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

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
        
        if (!this.state.email.includes('@')) {//email deve ter um @
            this.setState({error: "Email must include @"});
            return false; 
        }

        if (!this.state.password) {
            this.setState({error: "Password field cannot be blank!"});
            return false;
        }
        
        if (this.state.password.length < 4) {//senha deve ter pelo menos 4 caracteres
            this.setState({error: "Password length can't be shorter than 4 caracters"});
            return false;
        }

        return true;
        
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {
           this.props.createUser(this.state);
           this.setState(this.props.user);
        }
    };

    render()
    {
        const user = this.state;
       
        return(
         
            <form method="post" noValidate>
                <input id="inputName" placeholder="name" type="text" value={this.state.name} required onChange={event => this.setState({name: event.target.value})}/><br/>
                <input id="inputUser" placeholder="user" type="text" value={this.state.user} required onChange={event => this.setState({user: event.target.value})} /><br/>
                <input id="inputEmail" placeholder="email" type="text" value={this.state.email} required onChange={event => this.setState({email: event.target.value})} /><br/>
                <input id="inputPassword" placeholder="password" type="password" value={this.state.password} required onChange={event => this.setState({password: event.target.value})} /><br/>
            
                <br/><button onClick={this.onSubmit}>Create User</button>
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

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
}

export default UserForm;