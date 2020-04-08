import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {

  onSubmit = fields => {
    console.log("app fields: ",fields)
    const headers = new Headers();
    headers.append('Content-Type','application/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(fields),
    };

    const request = new Request ('http://localhost:8080/users',options);
    

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
