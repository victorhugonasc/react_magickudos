import React, { Component } from 'react';
import KudoRow from './KudoRow';
import PropTypes from 'prop-types'; 


class KudosList extends Component{

    constructor (){
        super();
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        this.props.fetchKudos();
    }

    render() { 

        const rows = this.renderRows(this.props.kudos);

        return(
            <div>
                {rows}     
            </div>
        );
    }


    renderRows(kudos) {
        const rows = kudos.map(this.renderRow);

        return rows;

    }

    renderRow(kudo) {
        return (<KudoRow kudo={kudo} key={kudo.id} />);
    }

}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired
}


export default KudosList;
