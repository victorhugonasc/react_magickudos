import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './UserForm.css';

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
       
        return(

            <div>
                <form method="post" noValidate>
                    <div className="login-div">
                        <div className="title">MagicKudos</div>
                        <div className="sub-title">Version 1.0</div>
                        
                        <div className="fields">
                            <input id="inputName" placeholder="name" type="text" value={this.state.name} required onChange={event => this.setState({name: event.target.value})}/><br/>
                            <input id="inputUser" placeholder="user" type="text" value={this.state.user} required onChange={event => this.setState({user: event.target.value})} /><br/>
                            <input id="inputEmail" placeholder="email" type="text" value={this.state.email} required onChange={event => this.setState({email: event.target.value})} /><br/>
                            <input id="inputPassword" placeholder="password" type="password" value={this.state.password} required onChange={event => this.setState({password: event.target.value})} /><br/>
                        
                            <br/><button className="createButton" onClick={this.onSubmit}>Create User</button>
                            <h5 className="inputError">{this.state.error}</h5>
                        </div>
                        
                    </div>
                </form>
            </div>
         
            
        );
    }
}

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
}

export default UserForm;