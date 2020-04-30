import React, { Component } from 'react';
import UserRow from './UserRow';
import PropTypes from 'prop-types'; 


class UsersList extends Component{

    constructor (){
        super();
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() { 

        const rows = this.renderRows(this.props.users);

        return(
            <div>
            <table id='userTable'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    {rows}
                </tbody>
            </table>     
            </div>
        );
    }


    renderRows(users) {
        const rows = users.map(this.renderRow);
        return rows;
    }

    renderRow(user) {
        return (<UserRow user={user} key={user.id} />);
    }

}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
}

export default UsersList;

