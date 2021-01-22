import React, { Component } from 'react';

import formatDate from '../FormatDate';
import './KudoCard.css';

import greatJobImage from '../../../../Images/Cards/greatJob.png';
import congratsImage from '../../../../Images/Cards/congrats.png';
import veryAwesomeImage from '../../../../Images/Cards/awesome.png';
import thankYouImage from '../../../../Images/Cards/thankYou.png';
import staySafeImage from '../../../../Images/Cards/staySafe.png';
import trashCanImage from '../../../../Images/Cards/trashCan.png';
import editImage from '../../../../Images/Cards/edit.png';
import noEditImage from '../../../../Images/Cards/noEdit.png';
import newImage from '../../../../Images/Cards/new.png';

import { Dropdown  } from 'react-bootstrap';
import TextEllipsis from 'react-text-ellipsis';

class KudoCard extends Component{
    state = {
        kudo: this.props.kudo,
        isEditable: this.props.isEditable,
        isInEditMode: false,
        inputMaxLength: 70,
        messageMaxLength: 280,
        types: ["greatJob", "congrats", "veryAwesome", "thankYou", "staySafe"],
        pallete: {
            logoImage:"#ecf0f3",
            button: "ecf0f3",
        },
    }

    getColorPallete = () => {
        let pallete = this.props.colorPallete[0];
        console.log(pallete);
        this.setState({pallete});
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
            <div className="kudos" draggable="false" onLoad={this.getColorPallete}>
            <div className="logo--image" style={{
                        backgroundColor: this.state.pallete.logoImage,
                        borderBottom: `2px solid ${this.state.pallete.button}`
                    }}>
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
                                    {this.state.types.map((type) => { 
                                        return <Dropdown.Item >{this.getLayout(type)}</Dropdown.Item>
                                    })}
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
                    ? <h4>From: <input type="text" defaultValue={this.state.kudo.sender} maxLength={this.state.inputMaxLength} onChange={event => this.updateSender(event.target.value)}/></h4> 
                    : <h4>From: {this.state.kudo.sender}</h4>
                }

                {this.state.isInEditMode 
                    ? <h4>To: <input type="text" defaultValue={this.state.kudo.receiver} maxLength={this.state.inputMaxLength} onChange={event => this.updateReceiver(event.target.value)}/></h4> 
                    : <h4>To: {this.state.kudo.receiver}</h4>
                }    
            </div>    

            <div className="card-message" style={{
                borderTop: `2px solid ${this.state.pallete.button}`,
            }}>
                <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                    {this.state.isInEditMode 
                        ? <textarea type="text" rows="7" cols="40" defaultValue={this.state.kudo.message} maxLength={this.state.messageMaxLength} onChange={event => this.updateMessage(event.target.value)} /> 
                        : "\" " + this.state.kudo.message + "\""
                    }
                </TextEllipsis>
            </div>

            <div className="card-date" style={{
                background: this.state.pallete.button,
            }}>
                <div className="clickables">
                    {this.state.isEditable &&
                        <div>
                            <img className="trashCan" alt="trashCan" src={trashCanImage} draggable="false" onClick={this.deleteKudo}/>
                            {this.state.isInEditMode 
                                ? <img className="edit" alt="edit" src={noEditImage} draggable="false" onClick={this.changeEditMode}/>
                                : <img className="edit" alt="edit" src={editImage} draggable="false" onClick={this.changeEditMode}/>
                            }
                        </div>
                    }
                </div>
                
                <h5 className="formatDate">{formatDate(this.state.kudo.date)}</h5>
            </div>   
        </div>
        )   
    }
}

export default KudoCard;