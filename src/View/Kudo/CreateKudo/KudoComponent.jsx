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
        console.log("State returned");
        console.log(data);
        this.props.fetchKudo(data);
    }

   
}

KudoComponent.propTypes = {
    kudo: PropTypes.object.isRequired,
    fetchKudo: PropTypes.func.isRequired
}


export default KudoComponent;

