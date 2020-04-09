import React from 'react';

export default class Form extends React.Component{

    state = {
        name: "",
        user: "",
        email: "",
        password: ""
    };

    onSubmit = (event) => {
      //  alert(JSON.stringify(this.state));
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render()
    {
        return(

            <form>
                <input placeholder="name" type="text" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/><br/>
                <input placeholder="user" type="text" value={this.state.user} onChange={event => this.setState({user: event.target.value})}/><br/>
                <input placeholder="email" type="text" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/><br/>
                <input placeholder="password" type="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/><br/>
            
                <br/><button onClick={() => this.onSubmit(event)}>Submit</button>
            </form>
        
                       
        );
    }

}