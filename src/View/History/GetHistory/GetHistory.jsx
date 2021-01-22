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

    filterKudos = (user) => {
        	
        const sortedKudos = this.props.kudos.sort((a, b) => b.date > a.date ? 1 : -1);
        return sortedKudos.filter(function (kudo) {
            if (user.name === kudo.receiver) {
                return kudo;
            }

            if (user.nicknames) {
               let b = user.nicknames.filter(function (nickname) {
                   if (kudo.receiver === nickname) {
                        return kudo;
                    }
               })

               if (b.length > 0) {
                   return b;
               }
            }
        });
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

                                    const filteredKudos = this.filterKudos(user);

                                    if (filteredKudos.length > 0) {
                                        return <HistoryRow key={anotherKey} user={user} kudos={filteredKudos} pallete={this.props.pallete} />
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