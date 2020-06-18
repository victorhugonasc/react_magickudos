import React, { Component } from 'react';
import Navegation from './Navegation';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";
import Favicon from 'react-favicon';
import './App.css';

export default class App extends Component {
  
  componentDidMount() {
    document.title = 'Magic Kudos';
  }

  render() {
    return (
      <Router>
        <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
        <div className="App">
          <Navegation />   
          <Routes />
        </div>
      </Router>
    );
  }
}

