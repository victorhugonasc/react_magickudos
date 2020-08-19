import React, { Component } from 'react';
import formatDate from './FormatDate';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';
import greatJobImage from '../../../Images/Cards/greatJob.png';
import congratsImage from '../../../Images/Cards/congrats.png';
import veryAwesomeImage from '../../../Images/Cards/awesome.png';
import thankYouImage from '../../../Images/Cards/thankYou.png';
import staySafeImage from '../../../Images/Cards/staySafe.png';
import newImage from '../../../Images/Cards/new.png';

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

    drag = (event) => {
        event.dataTransfer.setData('transfer',event.target.id);
    }

    noAllowDrop = (event) => {
        event.stopPropagation();
    }
    
    render() {
        const kudo = this.props.kudo;
        return(
            <div className= {kudo.layout} id = {this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
                <div className={kudo.layout + "-image"}>
                    <div className="type-figure">
                        <img className={"newImageFigure-" + kudo.stored} alt="new" src={newImage} draggable="false"/>
                        <h5 className="card-type">{this.getLayout(kudo.layout)}</h5>
                    </div>
                    <img className={"KudoFigure"} alt="kudoFigure" src={this.getImage(kudo.layout)} draggable="false"/>  
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