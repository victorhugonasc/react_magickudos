import React, { Component } from 'react';
import KudoForm from './KudoForm';


export default class Kudo extends Component{

    render() { 

        return (
        <div>
            <h3>Create Kudo</h3>
            <KudoForm onSubmit={field => this.onSubmit(field)} />
            
        </div>
        );
    }
}