import React, { Component } from 'react';
import HistoryRow from './HistoryRow/HistoryRow';

class GetHistory extends Component {
    
    state = {
        types: ["greatJob", "congrats", "veryAwesome", "thankYou", "staySafe"],
        pallete: {
            logoImage:"#ecf0f3",
            button: "ecf0f3",
        },     
    }

    componentDidMount() {
        this.props.fetchTeams();
        this.props.fetchAllKudos();
        this.props.fetchUsers();
        this.props.fetchColorPallete();
    }

    render() {
        return (
            <div className="historyPage">
                <section className="historyList">
                    <h2> History </h2>
                    {this.props.teams.map((team, key) => {
                        
                        const filteredUsers = this.props.users.filter(user => user.team.includes(team.name));
                        return (
                            <div key={key}>
                                <h1>{team.name}</h1>
                                {filteredUsers.map((user,anotherKey) => {
                                    return <HistoryRow key={anotherKey} user={user} kudos={this.props.kudos} pallete={this.props.pallete} />
                                })}
                            </div>
                        )})
                    }
                </section>
            </div>
        );
    }
}

export default GetHistory;