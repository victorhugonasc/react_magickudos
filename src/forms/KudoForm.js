import React from 'react';


//Redux
import {connect} from 'react-redux';
import {addKudo} from '../actions/KudoAction';

 class Form extends React.Component{

    state = this.props.kudos.kudo;

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
       
        this.props.add(this.state);
       
        const isValid = this.validade();

        if (isValid) {
       
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

            this.setState(this.props.kudos.kudo);
        }
    };

    render()
    {
        return(
         
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
                    <br/><button onClick={() => this.onSubmit(event)}>Create Kudo sem Redux</button>
                    <br/><div>{this.state.error}</div>
                    <div>
                        <h4>Sender: {this.props.kudos.kudo.sender} </h4>
                        <h4>Receiver: {this.props.kudos.kudo.receiver} </h4>
                        <h4>Message: {this.props.kudos.kudo.message} </h4>
                        <h4>Layout: {this.props.kudos.kudo.layout} </h4>
                       
                    </div>

                </form>

        );
    }

}


const mapStateToProps = (state) => {
    return{
        kudos: state.kudo
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        add: (data) => dispatch(addKudo(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Form)