import React, { Component } from 'react';
import axios from 'axios';

export default class KudoButton extends Component{

    onClick = event => {
        event.preventDefault();
        //this.props.onClick(this.state);

        axios.get('http://localhost:8080/kudos')
        .then(response => {
          return response.data;
        })
        .then(function(response){
            console.log(response);
            
            alert("Got all kudos");
            
        });

    };


    render() { 

        return (
        <div>
            <br/><button onClick={() => this.onClick(event)}>Get all Kudos</button>
        </div>
        );
    }

}