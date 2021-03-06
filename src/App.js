import React, { Component } from 'react';
import Navegation from './Navegation';
import Routes from './Routes';
import Footer from './Footer';
import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
require('dotenv').config();

export default class App extends Component {
  
  componentDidMount() {
    document.title = 'Magic Kudos';
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Navegation />   
          <Routes />
          <Footer/>
        </div>
      </Router>
    );
  }
}

