import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import KudoCard from './KudoCard';
import Droppable from './Droppable';
import './Droppable.css';

class KudosList extends Component{

    constructor (props){
        super(props);
        this.renderRows = this.renderRows.bind(this);
        this.updateKudo = this.updateKudo.bind(this);
    }

    componentDidMount() {
        this.props.fetchKudos();
    }

    render() { 
        const rows = this.renderRows(this.props.kudos);
        return(
            <div className= "kudoList" >
                <div className= "left-main-div">
                    <h5 className="title-message">To be read</h5>
                    <Droppable id = "left-drop" >
                        {rows}
                    </Droppable>
                </div>
                
                <div className= "right-main-div">
                    <h5 className="title-message">Have been read</h5>
                    <Droppable id = "right-drop" >
                    </Droppable>
                </div>
            </div>
        );
    }

    renderRows(kudos) {
        const rows = kudos.map(this.renderRow);
        return rows;
    }

    renderRow(kudo) {
        return (
             <KudoCard kudo={kudo} id={kudo.id} key={kudo.id} />
        );
    }

    updateKudo = (kudo) => {
        console.log("updateKUdo", kudo);
        //this.props.updateKudo(kudo);
    }
    
    deleteKudo(kudo) {
        this.props.deleteKudo(kudo);
    }

    /*deleteKudo = (kudo) => {
        this.props.deleteKudo(kudo);
    }*/
}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired,
    updateKudo: PropTypes.func.isRequired
}

export default KudosList;

