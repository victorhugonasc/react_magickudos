import React, { Component } from 'react';
import './App.css';
import Navegation from './Navegation';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";



export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navegation />   
          <Routes />
        </div>
      </Router>
    );
  }
}

