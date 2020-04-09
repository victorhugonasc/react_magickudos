import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {

  onSubmit = fields => {
    
    alert(JSON.stringify(fields));
    
    console.log("usando Fetch");

   // var myHeaders = new Headers();

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
      return response.status;
    })
    .then(function(response){
      console.log(response);
      alert("Cadastrado com sucesso");
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
        <h2>Create User</h2>
        <Form onSubmit={fields => this.onSubmit(fields)} />
        
      </div>
    );
  }
}

export default App;
