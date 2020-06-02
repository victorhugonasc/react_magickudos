import React, { Component } from 'react';
import './KudoCard.css';


class KudoCard extends Component{
    render() {
        
        const kudo = this.props.kudo;

        return(
            <div className= {kudo.layout}>
                <div className="card-image"></div>
              
                <div className="card-text" >
                    <span className ="date" > 4 dias atras </span>
                    <h4>From: {kudo.sender}</h4>
                    <h2>To: {kudo.receiver}</h2>
                    <p>{kudo.message}</p>
                </div>    

                <div className="card-stats"></div>   
            </div>
        );
    }
    
}

export default KudoCard;