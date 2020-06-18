import React, { Component } from 'react';
import Navegation from './Navegation';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';

export default class App extends Component {
  
  componentDidMount() {
    document.title = 'Magic Kudos';
  }

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

