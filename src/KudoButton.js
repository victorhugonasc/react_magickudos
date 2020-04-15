import React, { Component } from 'react';

export default class KudoButton extends Component{

    onClick = event => {
        event.preventDefault();
        this.props.onClick(this.state);
    };


    render() { 

        return (
        <div>
            <br/><button onClick={() => this.onClick(event)}>Get all Kudos</button>
        </div>
        );
    }

}