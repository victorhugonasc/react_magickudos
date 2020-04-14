import React from 'react';

const initialState = {
    name: "",
    user: "",
    email: "",
    password: "",
    error: ""
}

export default class Form extends React.Component{

    state = initialState;

    validade = () =>{

        this.setState({error: ""});

        if (!this.state.name) {
            this.setState({error: "Name field cannot be blank!"});
            return false;
        }

        if (!this.state.user) {
            this.setState({error: "User field cannot be blank!"});
            return false;
        }

        if (!this.state.email) {
            this.setState({error: "Email field cannot be blank!"});
            return false;
        }

        if (!this.state.email.includes('@')) {//email deve ter um @
            this.setState({error: "Email must include @"});
            return false; 
        }

        if (!this.state.password) {
            this.setState({error: "Password field cannot be blank!"});
            return false;
        }

        if (this.state.password.length < 4) {//senha deve ter pelo menos 4 caracteres
            this.setState({error: "Password length can't be shorter than 4 caracters"});
            return false;
        }

        return true;

    }


    onSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validade();

        if (isValid) {
            this.props.onSubmitUser(this.state);
            this.setState(initialState);
        }
    };

    render()
    {
        return(

            <form method="post" noValidate>
                <input placeholder="name" type="text" value={this.state.name} onChange={event => this.setState({name: event.target.value})} required/><br/>
                <input placeholder="user" type="text" value={this.state.user} onChange={event => this.setState({user: event.target.value})} required/><br/>
                <input placeholder="email" type="text" value={this.state.email} onChange={event => this.setState({email: event.target.value})} required/><br/>
                <input placeholder="password" type="password" value={this.state.password} onChange={event => this.setState({password: event.target.value})} required/><br/>
            
                <br/><button onClick={() => this.onSubmit(event)}>Create User</button>
                <br/><div>{this.state.error}</div>
            </form>

        
        
                       
        );
    }

}