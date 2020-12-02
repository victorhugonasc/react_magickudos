import React, { Component } from 'react';
import { Dropdown  } from 'react-bootstrap';
import formatDate from './FormatDate';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';
import greatJobImage from '../../../Images/Cards/greatJob.png';
import congratsImage from '../../../Images/Cards/congrats.png';
import veryAwesomeImage from '../../../Images/Cards/awesome.png';
import thankYouImage from '../../../Images/Cards/thankYou.png';
import staySafeImage from '../../../Images/Cards/staySafe.png';
import trashCanImage from '../../../Images/Cards/trashCan.png';
import editImage from '../../../Images/Cards/edit.png';
import noEditImage from '../../../Images/Cards/noEdit.png';
import newImage from '../../../Images/Cards/new.png';

class KudoCard extends Component{
    state = {
        kudo: this.props.kudo,
        isInEditMode: false,
        inputMaxLength: 70,
        messageMaxLength: 280,
        types:["greatJob","congrats","veryAwesome","thankYou","staySafe"],
    }
    
    getLayout = (layout) => {
        switch(layout) {
            case "greatJob": return "GREAT JOB";
            case "congrats": return "CONGRATULATIONS";
            case "veryAwesome": return "VERY AWESOME";
            case "thankYou": return "THANK YOU";
            case "staySafe": return "STAY SAFE";
        default: break;
        }
    }

    getImage = (layout) => {
        switch(layout) {
            case "greatJob": return greatJobImage;
            case "congrats": return congratsImage;
            case "veryAwesome": return veryAwesomeImage;
            case "thankYou": return thankYouImage;
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

    requestUpdate = () => {
        if(this.state.isInEditMode) {
            this.props.updateKudo(this.state.kudo);
        }
    }

    deleteKudo = () => {
        if (window.confirm("Do you really want to delete this kudo?")) { 
            this.props.deleteKudo(this.state.kudo);
          }
        
    }

    updateLayout = (text) => {
        let layout;
        switch(text) {
            case "GREAT JOB": layout = "greatJob"; break;
            case "CONGRATULATIONS": layout = "congrats"; break;
            case "VERY AWESOME": layout = "veryAwesome"; break;
            case "THANK YOU": layout = "thankYou"; break;
            case "STAY SAFE": layout = "staySafe"; break;
        default: break;
        }

        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                layout: layout,
            },
        }));
    };


    updateSender = (value) => {
        
        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                sender: value,
            },
        }));

    };

    updateReceiver = (value) => {
        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                receiver: value,
            },
        }));
    };

    updateMessage = (value) => {
        this.setState((prevState) => ({
            kudo: {
                ...prevState.kudo,
                message: value,
            },
        }));
    };

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        },this.requestUpdate());

    }

    render() {
        return(
            <div className="kudos" id = {this.props.id} draggable="false" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
            <div className="logo--image">
                <div className="type-figure">
                    {this.state.kudo.stored === "no" &&
                        <img alt="new" src={newImage} draggable="false"/>
                    }

                {this.state.isInEditMode 
                    ?   <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <h5 className="type-figure--dropdown">{this.getLayout(this.state.kudo.layout)}</h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu onClick={event => this.updateLayout(event.target.text)}>
                                <Dropdown.Item >{this.getLayout(this.state.types[0])}</Dropdown.Item>
                                <Dropdown.Item >{this.getLayout(this.state.types[1])}</Dropdown.Item>
                                <Dropdown.Item >{this.getLayout(this.state.types[2])}</Dropdown.Item>
                                <Dropdown.Item >{this.getLayout(this.state.types[3])}</Dropdown.Item>
                                <Dropdown.Item >{this.getLayout(this.state.types[4])}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                    :   <h5>{this.getLayout(this.state.kudo.layout)}</h5>
                }  
                    
                    
                </div>
                <div className="kudofigure">
                    <img alt="kudoFigure" src={this.getImage(this.state.kudo.layout)} draggable="false"/>  
                </div>
                
            </div>
             
            <div className="card-from-to">
                {this.state.isInEditMode 
                    ?  <h4>From: <input type="text" defaultValue={this.state.kudo.sender} maxLength={this.state.inputMaxLength} onChange={event => this.updateSender(event.target.value)}/></h4> 
                    :  <h4>From: {this.state.kudo.sender}</h4>
                }

                {this.state.isInEditMode 
                    ? <h4>To: <input type="text" defaultValue={this.state.kudo.receiver} maxLength={this.state.inputMaxLength} onChange={event => this.updateReceiver(event.target.value)}/></h4> 
                    : <h4>To: {this.state.kudo.receiver}</h4>
                }    
            </div>    

            <div className="card-message">
                <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                    {this.state.isInEditMode 
                        ? <textarea type="text" rows="7" cols="40" defaultValue={this.state.kudo.message} maxLength={this.state.messageMaxLength} onChange={event => this.updateMessage(event.target.value)} /> 
                        : "\" " + this.state.kudo.message + "\""
                    }
                </TextEllipsis>
            </div>

            <div className="card-date">
                <div className="clickables">
                    <img className="trashCan" alt="trashCan" src={trashCanImage} draggable="false" onClick={this.deleteKudo}/>
                    {this.state.isInEditMode 
                        ?  <img className="edit" alt="edit" src={noEditImage} draggable="false" onClick={this.changeEditMode}/>
                        : <img className="edit" alt="edit" src={editImage} draggable="false" onClick={this.changeEditMode}/>
                    }
                </div>
                
                <h5 className="formatDate">{formatDate(this.state.kudo.date)}</h5>
            </div>   
        </div>
        )   
    }
    
}

export default KudoCard;