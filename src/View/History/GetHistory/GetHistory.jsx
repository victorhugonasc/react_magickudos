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

    handleVisibility = (team) => {
        team.visible = !team.visible;
        this.forceUpdate();
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
                    
                    <h1 className="historyHeader"> Kudos' Museum </h1>

                    {this.props.teams.map((team, key) => {

                        const filteredUsers = this.props.users.filter(user => user.team.includes(team.name));

                        return (
                            <div className="historyContainer" key={key}>

                                <h2 className="teamNameHeader" onClick={this.handleVisibility.bind(this, team)} >{team.name}</h2>

                                {team.visible && filteredUsers.map((user, anotherKey) => {

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