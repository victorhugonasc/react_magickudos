import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './UserForm.css';

class UserForm extends Component{

    INICIAL_STATE = {
        welcomeMsg: "Create new user",
        user: this.props.user,
        newTag:"",
        getTags:"",
    };

    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }

    isValid = () => {
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

    updateTeam = (value) => {

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                team: value,
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

        if(this.isTagValid()){

            if (this.state.user.tags.length !== 0)
            {
                this.setState((prevState) => ({
                    user: {
                        ...prevState.user,
                        tags: prevState.user.tags.concat(prevState.newTag),
                    },
                    getTags: prevState.getTags.concat(",").concat(prevState.newTag),
                    newTag : "",
                }));
            }

            else{
                this.setState((prevState) => ({
                    user: {
                        ...prevState.user,
                        tags: prevState.user.tags.concat(prevState.newTag),
                    },
                    getTags: prevState.getTags.concat(prevState.newTag),
                    newTag : "",
                }));
            }
           
        }
            
    };

    isTagValid = () => {

        const tags = this.state.user.tags;

        if (!this.state.newTag) {

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "Tag field can't be empty!",
                }
            }));
            return false;
        }

        else{

            for( var i = 0; i < tags.length; i++){
                if(tags[i] === this.state.newTag)
                {
                    this.setState((prevState) => ({
                        user: {
                            ...prevState.user,
                            error: "Tag already exists!",
                        }
                    }));
                    return false;
                }
            }

            this.setState((prevState) => ({
                user: {
                    ...prevState.user,
                    error: "",
                }
            }));
            return true;
        }
    }


    renderRow(tag) {
       if(this.state.newTag !== tag){
           return true;
       }
       return false;
    }

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
                    <div className="login-default">
                        <h5 className="form-welcome-msg">{this.state.welcomeMsg}</h5>
                        <div className="fields">
                            <input id="inputName" placeholder="name" type="text" value={this.state.user.name} required onChange={event => this.updateName(event.target.value)}/>
                            <input id="inputName" placeholder="team" type="text" value={this.state.user.team} required onChange={event => this.updateTeam(event.target.value)}/>
                            <input id="inputEmail" placeholder="email" type="text" value={this.state.user.email} required onChange={event => this.updateEmail(event.target.value)}/>
                            <input id="inputPassword" placeholder="password" type="password" value={this.state.user.password} required onChange={event => this.updatePassword(event.target.value)}/>
                            <div className="divTag">
                                <input id="inputTag" placeholder="Add a tag" type="text" value={this.state.newTag} required onChange={event => this.updateTags(event.target.value)}/>
                                <button className="tagButton" onClick={this.addTag}>+</button>
                                <h5 className="allTags">{this.state.getTags}</h5>
                            </div>
                            <button className="createButton" onClick={this.onSubmit}>Create!</button>
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