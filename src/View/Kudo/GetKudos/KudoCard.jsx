import React, { Component } from 'react';
import formatDate from './FormatDate';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';
import Figure from 'react-bootstrap/Figure';
import greatJobImage from '../../../Images/Cards/greatJob.png';
import congratsImage from '../../../Images/Cards/congrats.png';
import veryAwesomeImage from '../../../Images/Cards/awesome.png';
import thankYouImage from '../../../Images/Cards/thankYou.png';
import staySafeImage from '../../../Images/Cards/staySafe.png';
import newImage from '../../../Images/Cards/new.png';

class KudoCard extends Component{

    INICIAL_STATE = {
        newImage: "newImageFigure-",
    };


    constructor (props) {
        super(props);
        this.state = this.INICIAL_STATE;
    }
    
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

    drag = (event) => {
        event.dataTransfer.setData('transfer',event.target.id);
    }

    noAllowDrop = (event) => {
        event.stopPropagation();
    }
    
    render() {
        const kudo = this.props.kudo;
        console.log(kudo.stored);
       
        const IMG_CARD = kudo.layout + "-image";
        
        return(
            <div className= {kudo.layout} id = {this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
                <div className={IMG_CARD}>
                    <div className="type-figure">
                        <h5 className="card-type">{this.getLayout(kudo.layout)}</h5>
                        <img className={"newImageFigure-" + kudo.stored} alt="new" src={newImage} draggable="false"/> 
                    </div>

                    <Figure className="KudoFigure">
                         <Figure.Image
                            width={160}
                            height={160}
                            src={this.getImage(kudo.layout)}
                            draggable="false"
                        />
                    </Figure>
                    
                </div>
                 
                <div className="card-from-to" >
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