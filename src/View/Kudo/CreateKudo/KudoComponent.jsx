import React, { Component } from 'react';
import KudoForm from './KudoForm';
import PropTypes from 'prop-types'; 


class KudoComponent extends Component{

    constructor (){
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() { 

        return(
            <div>
                <KudoForm kudo={this.props.kudo} onSubmit={this.onSubmit} />     
            </div>
        );
    }

    onSubmit(data){
        this.props.createKudo(data);
    }

   
}

KudoComponent.propTypes = {
    kudo: PropTypes.object.isRequired,
    createKudo: PropTypes.func.isRequired
}


export default KudoComponent;

