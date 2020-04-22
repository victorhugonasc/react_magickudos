import React from 'react';


//Redux
import {Provider, connect} from 'react-redux';
import {store,mapStateToProps,mapDispatchToProps} from './KudoStore';

const initialState = {
    sender: "",
    receiver: "",
    message: "",
    layout: "",
    error: "",
}

const Counter = (props) => (

 <div>
    <h4>Sender: {props.sender} </h4>
    <h4>Receiver: {props.receiver} </h4>
    <h4>Message: {props.message} </h4>
    <h4>Layout: {props.layout} </h4>
    
    <br/><button onClick={props.addKudo}>Create Kudo</button>
    
 
  </div>
  
);

const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)


export default class Form extends React.Component{

    state = initialState;

    validade = () =>{

        this.setState({error: ""});

        if (!this.state.sender) {
            this.setState({error: "Sender field cannot be blank!"});
            return false;
        }

        if (!this.state.receiver) {
            this.setState({error: "Receiver field cannot be blank!"});
            return false;
        }

        if (!this.state.message) {
            this.setState({error: "Email field cannot be blank!"});
            return false;
        }

        if (!this.state.layout) {
            this.setState({error: "Layout field cannot be blank!"});
            return false;
        }

        return true;

    }


    onSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validade();

        if (isValid) {
           // this.props.onSubmit(this.state);

           console.log("filho");

           var request = new Request('http://localhost:8080/kudos');

           var options = {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             mode: 'cors',
             cache: 'default',
             body: JSON.stringify(this.state)
           };
           
           fetch(request,options)
           .then(function (response){
               if (response.ok) {
                 return response.json;    
               }
               else{
                 throw new Error("a");
               }
             
           })
           .then(function(response){
             console.log(response.toString);
             alert("Kudo created");
           });


            this.setState(initialState);
        }
    };

    render()
    {
        return(
            <Provider store={store}>
                <form method="post" noValidate>
                    <input placeholder="sender" type="text" value={this.state.sender} required onChange={event => this.setState({sender: event.target.value})}/><br/>
                    <input placeholder="receiver" type="text" value={this.state.receiver} required onChange={event => this.setState({receiver: event.target.value})} /><br/>
                    <input placeholder="message" type="text" value={this.state.message} required onChange={event => this.setState({message: event.target.value})} /><br/>
                
                    <select id="selectLayout"  defaultValue={"Default"} onChange={event => this.setState({layout: event.target.value})}>
                        <option value="Default" disabled>Layout</option>
                        <option value="greatJob">Great Job</option>
                        <option value="veryAwesome" defaultValue>Very Awesome</option>
                        <option value="thankYou">Thank You</option>
                        <option value="congrats">Congratulations</option>
                        <option value="staySafe">Stay Safe</option>
                    </select>
                   
                    <br/><div>{this.state.error}</div>
                </form>

            
                <ConnectedCounter/>       
                <br/><button onClick={() => this.onSubmit(event)}>Create Kudo sem Redux</button>
            </Provider>
        
                       
        );
    }

}