import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import KudosListPage from './View/Kudo/GetKudos/index'

export default class App extends Component {

  render() {
    return (
      <Router>
         
        <div className="App">
         
          <Nav />   
          <Switch>
            <Route path="/getKudos" exact component={KudosListPage}/>
          </Switch>
         

         
        </div>
      </Router>
    );
  }
}

