import React, {Component} from 'react';

export default class Draggable extends Component{

    drag = (event) => {
        event.dataTransfer.setData('transfer',event.target.id);
    }

    noAllowDrop = (event) => {
        event.stopPropagation();
    }

    render(){
        return(
            <div className="drag-div" id = {this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop} style= {this.props.style}>
                {this.props.children}
            </div>
        );
    }
}