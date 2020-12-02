import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import KudoCard from './KudoCard';
import './KudosList.css';

class KudosList extends Component{

    constructor (props){
        super(props);
        this.renderRows = this.renderRows.bind(this);
        this.deleteKudo = this.deleteKudo.bind(this);
        this.updateKudo = this.updateKudo.bind(this);
    }

    state = {
        kudosUnread: 0
    }

    componentDidMount() {
        this.props.fetchKudos();
        this.updateKudosUnread(this.props.kudos.length);
    }

    deleteKudo (kudo) {
        this.props.deleteKudo(kudo);
    }

    updateKudo = (kudo) => {
        this.props.updateKudo(kudo);
    }

    updateKudosUnread = (value) => {
        console.log(value);
        this.setState({
            kudosUnread: value,
        });
    };

    render() { 
        const rows = this.renderRows(this.props.kudos);
        return(
            <div className= "kudosList" >
                <h5 className="header--message">{this.state.kudosUnread} Kudo{this.state.kudosUnread !== 1 ? 's' : '' } Unread</h5>
                {rows}
            </div>
        );
    }

    renderRows(kudos) {
        const rows = kudos.map(this.renderRow,this);
        return rows;
    }

    renderRow(kudo) {
        return (
            <KudoCard kudo={kudo} id={kudo.id} key={kudo.id} deleteKudo={this.deleteKudo} updateKudo={this.updateKudo}/>
        );
    }
}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired,
    updateKudo: PropTypes.func.isRequired,
    deleteKudo: PropTypes.func.isRequired
}

export default KudosList;

