import React, { Component } from 'react';
import HistoryRow from './HistoryRow/HistoryRow';
import './GetHistory.css';
import ReactLoading from "react-loading";

class GetHistory extends Component {

    componentDidMount() {
        this.props.fetchTeams();
        this.props.fetchAllKudos();
        this.props.fetchUsers();
        this.props.fetchColorPallete();
    }

    render() {
        return (
            <div className="historyPage">
                {this.props.fetch &&
                    <div className="loading">
                        <ReactLoading type={"spin"} color="#1da88a" />
                    </div>
                }
                <div className="historyList">
                    
                    <h2> History </h2>

                    {this.props.teams.map((team, key) => {

                        const filteredUsers = this.props.users.filter(user => user.team.includes(team.name));

                        return (
                            <div key={key}>

                                <h1>{team.name}</h1>

                                {filteredUsers.map((user, anotherKey) => {

                                    const filteredKudos = this.props.kudos.filter(kudo => kudo.receiver === user.name);

                                    if (filteredKudos.length > 0) {
                                        return <HistoryRow key={anotherKey} user={user} kudos={this.props.kudos} pallete={this.props.pallete} />
                                    }
                                })}
                            </div>
                        )})
                    }
                </div>
                
            </div>
        );
    }
}

export default GetHistory;