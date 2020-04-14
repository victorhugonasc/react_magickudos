import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './UserForm.js';
import KudoForm from './KudoForm.js';

export default class App extends Component {

  onSubmitUser = fields => {
    
    var request = new Request('http://localhost:8080/users');

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(fields)
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
      console.log(response);
      alert("User created");
    });
  };

  onSubmitKudo = field => {
    
    var request = new Request('http://localhost:8080/kudos');

    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(field)
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
      console.log(response);
      alert("Kudo created");
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Magic Kudos</h2>
        </div>
        <p>Index page</p>
        <a href="/home.html">/home</a>
        <a href="/users.html">/Users</a>
        
        <div>
          <h2>Create User</h2>
          <UserForm onSubmitUser={fields => this.onSubmitUser(fields)} />
          <h2>Create Kudo</h2>
          <KudoForm onSubmitKudo={field => this.onSubmitKudo(field)} />
        </div>
        
        
      </div>
    );
  }
}


