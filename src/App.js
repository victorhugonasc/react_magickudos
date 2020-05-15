import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Routes from './Routes';
import { BrowserRouter as Router} from "react-router-dom";
import {Footer} from './Footer';


export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />   
          <Routes />
          <Footer/>
        </div>
      </Router>
    );
  }
}

