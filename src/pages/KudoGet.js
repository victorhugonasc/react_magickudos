import React, { Component } from 'react';
import KudoButton from '../buttons/KudoButton';


export default class KudoGet extends Component{



    render() { 

        return (
        <div>
            <h3>Get Kudos</h3>
            <KudoButton onClick={field => this.onClick()}/>
        </div>
        );
    }

}