import React, { Component } from 'react';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';


class KudoCard extends Component{
    render() {
        
        const kudo = this.props.kudo;
        const IMG_CARD = kudo.layout + "-image";

        return(
            <div className= {kudo.layout}>
                <div className={IMG_CARD}></div>
              
                <div className="card-to-from" >
                    <h4>From: {kudo.sender}</h4>
                    <h4>To: {kudo.receiver}</h4>
                </div>    

                <div className="card-message">
                    <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                        <p><span className = "quotes">"</span>{kudo.message}<span className = "unquotes"> "</span></p>
                    </TextEllipsis>
                </div>

                <div className="card-date">
                    <div > 4 dias atras </div>
                </div>   
            </div>
        );
    }
    
}

export default KudoCard;