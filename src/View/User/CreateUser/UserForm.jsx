import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './UserForm.css';

class UserForm extends Component{

    INICIAL_STATE = {
        welcomeMsg: "Create new user",
        user: this.props.user,
        newTag:""
    };

    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }

    isValid = () => {
        console.log("validating",this.state.user)
        if (!this.state.user.name) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Name field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.user.email) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Email field can't be empty!",
                }
            }));
            return false;
        }
        
        if (!this.state.user.password) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Password field can't be empty!",
                }
            }));
            return false;
        }
        
        return true;
    }

    updateName = (value) => {

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                name: value,
            }
        }));
    };

    updateEmail = (value) => {

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                email: value,
            }
        }));
    };

    updatePassword = (value) => {

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                password: value,
            }
        }));
    };

    updateTags = (value) => {

        this.setState(() => ({
                newTag: value,
        }));
    };

    addTag = (event) => {
        event.preventDefault();
       
        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                tags: prevState.user.tags.concat(prevState.newTag),
            },
            newTag : "",
        }));

    };

    onSubmit = (event) => {
        event.preventDefault();
        if(this.isValid())
        {
           this.props.createUser(this.state.user);
           this.setState(this.INICIAL_STATE);
        }
    };

    render()
    {
        return(
            <div>
                <form method="post" noValidate>
                    <div className="login-div">
                        <h5 className="form-welcome-msg">{this.state.welcomeMsg}</h5>
                        <div className="fields">
                            <input id="inputName" placeholder="name" type="text" value={this.state.user.name} required onChange={event => this.updateName(event.target.value)}/>
                            <input id="inputEmail" placeholder="email" type="text" value={this.state.user.email} required onChange={event => this.updateEmail(event.target.value)}/>
                            <input id="inputPassword" placeholder="password" type="password" value={this.state.user.password} required onChange={event => this.updatePassword(event.target.value)}/>
                            <input id="inputTag" placeholder="Add a tag" type="text" value={this.state.newTag} required onChange={event => this.updateTags(event.target.value)}/>
                            <button className="tagButton" onClick={this.addTag}>Add new tag</button>
                            <button className="createButton" onClick={this.onSubmit}>Create User</button>
                            <h5 className="allTags">{this.state.user.tags}</h5>
                            <h5 className="inputError">{this.state.user.error}</h5>
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