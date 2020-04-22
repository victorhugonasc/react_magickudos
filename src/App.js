import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

//pages
import User from './User.js';
import Kudo from './Kudo.js';
import KudoGet from './KudoGet.js' ;

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
         
        <div className="App">
         
          <Nav />   
          <Switch>
            <Route path="/user" exact component={User}/>
            <Route path="/kudo" exact component={Kudo}/>
            <Route path="/kudoGet" exact component={KudoGet}/>
          </Switch>
         

         
        </div>
      </Router>
    );
  }
}

