import React, {Component} from 'react';


export default class Droppable extends Component{

    drop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('transfer');
        event.target.appendChild(document.getElementById(data));
    }

    allowDrop = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <div id = {this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style= {this.props.style}>
                {this.props.children}
            </div>
        );
    }
}