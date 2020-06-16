import React, { Component } from 'react';
import formatDate from './FormatDate';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';
import Figure from 'react-bootstrap/Figure';
import greatJobImage from '../../../Images/Miniatures/greatJob.png';
import congratsImage from '../../../Images/Miniatures/congrats.png';
import veryAwesomeImage from '../../../Images/Miniatures/awesome.png';
import thankYouImage from '../../../Images/Miniatures/thankYou.png';
import staySafeImage from '../../../Images/Miniatures/staySafe.png';

class KudoCard extends Component{
    
    getLayout = (layout) => {
        
        switch(layout) {
            case "greatJob": return "GREAT JOB";
            case "veryAwesome": return "VERY AWESOME";
            case "thankYou": return "THANK YOU";
            case "congrats": return "CONGRATULATIONS";
            case "staySafe": return "STAY SAFE";
        default: break;
        }
    } 

    getImage = (layout) => {
        switch(layout) {
            case "greatJob": return greatJobImage;
            case "veryAwesome": return veryAwesomeImage;
            case "thankYou": return thankYouImage;
            case "congrats": return congratsImage;
            case "staySafe": return staySafeImage;
        default: break;
        }
    }
    
    render() {
        const kudo = this.props.kudo;
        const IMG_CARD = kudo.layout + "-image";

        return(
            <div className= {kudo.layout}>
                <div className={IMG_CARD}>
                    <h5 className="card-type">{this.getLayout(kudo.layout)}</h5>
                    <Figure >
                        <Figure.Image
                            width={160}
                            height={160}
                            src={this.getImage(kudo.layout)}
                            draggable="false"
                        />
                    </Figure>
                    
                </div>
                 
                <div className="card-to-from" >
                    <h4>From: {kudo.sender}</h4>
                    <h4>To: {kudo.receiver}</h4>
                </div>    

                <div className="card-message">
                    <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                        <span className = "quotes">" </span>{kudo.message}<span className = "unquotes"> "</span>
                    </TextEllipsis>
                </div>

                <div className="card-date">
                    <h5>{formatDate(kudo.date)}</h5>
                </div>   
            </div>
        );
    }
    
}

export default KudoCard;