import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import User from './User.js';
import Kudo from './Kudo.js';
import KudoGet from './KudoGet.js' ;
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import {Provider, connect} from 'react-redux';

import {store,mapStateToProps,mapDispatchToProps} from './Store';

const Counter = (props) => (

  <div>
    <h2>Counter: {props.number} </h2>
    <input type="button" value="add" onClick={props.add}/>
    <input type="button" value="subtract" onClick={props.subtract}/>
  </div>

);

const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)


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
          <Provider store={store}>
            <ConnectedCounter/>       
          </Provider>
         
          
        </div>
      </Router>
    );
  }
}

