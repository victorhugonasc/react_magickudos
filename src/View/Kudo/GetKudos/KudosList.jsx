import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import './KudosList.css'
import KudoCard from './KudoCard';
import Draggable from './Draggable';
import Droppable from './Droppable';
import './Droppable.css';
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

        const rows = this.renderRows(this.props.kudos);
        return(
        
            //<ScrollContainer className="scroll-container">
                <div className= "kudoList" >
                    
                    <div>
                        <h5 className="title-message">To be read</h5>
                        <Droppable id = "left-drop" >
                            {rows}
                        </Droppable>
                    </div>
                   
                    <Droppable id = "right-drop" >
                        <h5 className="title-message">Have been read</h5>
                    </Droppable>
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
            <Draggable id={kudo.id} >
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

