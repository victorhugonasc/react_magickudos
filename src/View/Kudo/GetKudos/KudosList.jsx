import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import KudoCard from './KudoCard';
import Draggable from './Draggable';
import Droppable from './Droppable';
import './KudosList.css'
import './Droppable.css';

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
                <div className= "kudoList" >
                    <div className= "left-main-div">
                        <h5 className="title-message">To be read</h5>
                        <Droppable id = "left-drop" >
                            {rows}
                        </Droppable>
                    </div>
                   
                    <Droppable id = "right-drop" >
                        <h5 className="title-message">Have been read</h5>
                    </Droppable>
                </div>
        );
    }

    renderRows(kudos) {
        const rows = kudos.map(this.renderRow);
        return rows;
    }

    renderRow(kudo) {
        return (
            <Draggable id={kudo.id} key={kudo.id}>
                 <KudoCard kudo={kudo} key={kudo.id}/>
            </Draggable>
        );
    }
}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired
}

export default KudosList;

