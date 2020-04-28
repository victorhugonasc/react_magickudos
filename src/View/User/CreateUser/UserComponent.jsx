import React, { Component } from 'react';
import UserForm from './UserForm';
import PropTypes from 'prop-types'; 

class UserComponent extends Component{

    constructor (){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() { 

        return(
            <div>
                <UserForm user={this.props.user} onSubmit={this.onSubmit} />     
            </div>
        );
    }

    onSubmit(data){
        this.props.createUser(data);
    }

}

UserComponent.propTypes = {
    user: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired
}

export default UserComponent;

