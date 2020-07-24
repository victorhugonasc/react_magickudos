import React, { Component } from 'react';
import { Dropdown  } from 'react-bootstrap';
import formatDate from './FormatDate';
import TextEllipsis from 'react-text-ellipsis';
import './KudoCard.css';
import Figure from 'react-bootstrap/Figure';
import greatJobImage from '../../../Images/Cards/greatJob.png';
import congratsImage from '../../../Images/Cards/congrats.png';
import veryAwesomeImage from '../../../Images/Cards/awesome.png';
import thankYouImage from '../../../Images/Cards/thankYou.png';
import staySafeImage from '../../../Images/Cards/staySafe.png';

class KudoCard extends Component{
    state = {
        kudo: this.props.kudo,
        isInEditMode: false,
        types:["greatJob","congrats","veryAwesome","thankYou","staySafe"],
    }
    
    getLayout = (layout) => {
        console.log("layout",layout);
        switch(layout) {
            case "greatJob": return "GREAT JOB";
            case "congrats": return "CONGRATULATIONS";
            case "veryAwesome": return "VERY AWESOME";
            case "thankYou": return "THANK YOU";
            case "staySafe": return "STAY SAFE";
        default: break;
        }
    }
    
    getType = (layout) => {
        const types = this.state.types;
       // console.log("antes",types);
        for (let i in types) {
           if(types[i] !== layout){
                let type = types[i];
                types.splice(i,1);
          //      console.log("depois",types);
                this.setState(() => ({types:types}));
                return type;
           }
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
        })
        console.log("Edit mode on");
    }

    renderEditView = (kudo,IMG_CARD) => {
        return(
            <div className= {kudo.layout} id = {this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
            <div className={IMG_CARD}>
               
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <h5 className="card-type">{this.getLayout(kudo.layout)}</h5>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">{this.getLayout(kudo.layout)}</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">{this.getType(kudo.layout)}</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">{this.getType(kudo.layout)}</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">{this.getType(kudo.layout)}</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">{this.getType(kudo.layout)}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Figure >
                    <Figure.Image
                        width={160}
                        height={160}
                        src={this.getImage(kudo.layout)}
                        draggable="false"
                    />
                </Figure>
                
            </div>
             
            <div className="card-from-to">
                <h4>From: <input type="text" defaultValue={kudo.sender} onChange={event => this.updateSender(event.target.value)}/></h4>
                <h4>To: <input type="text" defaultValue={kudo.receiver} onChange={event => this.updateReceiver(event.target.value)}/></h4>
            </div>    

            <div className="card-message" >
                <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                    <span className = "quotes">" </span><input type="text" defaultValue={kudo.message} onChange={event => this.updateMessage(event.target.value)} /><span className = "unquotes"> "</span>
                </TextEllipsis>
            </div>

            <div className="card-date">
            <button className="editButton" onClick={this.changeEditMode}>Unedit</button>
                <h5>{formatDate(kudo.date)}</h5>
            </div>   
        </div>
        )   
    }

    renderDefaultView = (kudo,IMG_CARD) => {
        return(
            <div className= {kudo.layout} id = {this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
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
             
            <div className="card-from-to">
                <h4>From: {kudo.sender}</h4>
                <h4>To: {kudo.receiver}</h4>
            </div>    

            <div className="card-message">
                <TextEllipsis lines={6} tag={'p'} ellipsisChars={'...'}>
                    <span className = "quotes">" </span>{kudo.message}<span className = "unquotes"> "</span>
                </TextEllipsis>
            </div>

            <div className="card-date">
                <button className="editButton" onClick={this.changeEditMode}>Edit</button>
                <h5>{formatDate(kudo.date)}</h5>
            </div>   
        </div>
        )   
    }

    render() {
      
        const IMG_CARD = this.state.kudo.layout + "-image";

        return this.state.isInEditMode ? this.renderEditView(this.state.kudo,IMG_CARD) : this.renderDefaultView(this.state.kudo,IMG_CARD)
    }
    
}

export default KudoCard;