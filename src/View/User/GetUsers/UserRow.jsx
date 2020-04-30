import React, { Component } from 'react';


class UserRow extends Component{
    render() { 

        const user = this.props.user; 
        return(
        <tr>
            <td>{user.name}</td>
            <td>{user.user}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
        </tr>
        );
    }
}
export default UserRow;

