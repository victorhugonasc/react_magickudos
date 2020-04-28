import React, { Component } from 'react';


class UserRow extends Component{

    render() { 

        const user = this.props.user; 

        return(
            <div>
                <h4>Name: {user.name} User: {user.user} Email: {user.email} Password: {user.password}</h4>   
            </div>
        );
    }
}
export default UserRow;

