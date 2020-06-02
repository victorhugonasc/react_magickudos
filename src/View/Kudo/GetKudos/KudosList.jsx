import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudosList.css'
import KudoCard from './KudoCard';
//import ScrollContainer from 'react-indiana-drag-scroll'


class KudosList extends Component{

    constructor (){
        super();
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        this.props.fetchKudos();
    }

    render() { 

        const rows = this.renderRows(this.props.kudos.reverse());
        return(
        
         //   <ScrollContainer className="scroll-container">
                <div className= "kudoList">
                    {rows}
                </div>
          //  </ScrollContainer>
        );
    }


    renderRows(kudos) {
        const rows = kudos.map(this.renderRow);

        return rows;

    }

    renderRow(kudo) {
        return (
            <KudoCard kudo={kudo} key={kudo.id}/>
        );
    }

}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired
}

export default KudosList;

