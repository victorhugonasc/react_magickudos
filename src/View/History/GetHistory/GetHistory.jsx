import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class GetHistory extends Component {

    state = {
        teams: this.props.teams,
    }

    componentDidMount() {
        this.props.fetchAllKudos();
        this.props.fetchUsers();
        this.props.fetchTeams();
        this.props.fetchColorPallete();
    }

    render() {
        console.log(this.state);
        return (
            <div>
                ascasc
            </div>
        );
    }
}

GetHistory.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchAllKudos: PropTypes.func.isRequired,
}

export default GetHistory;