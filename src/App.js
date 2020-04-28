import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import KudosListPage from './View/Kudo/GetKudos/index';
import KudoCreationPage from './View/Kudo/CreateKudo/index';
import UserCreationPage from './View/User/CreateUser/index';
import UsersListPage from './View/User/GetUsers/index';

export default class App extends Component {

  render() {
    return (
      <Router>
         
        <div className="App">
         
          <Nav />   
          <Switch>
            <Route path="/" exact/>
            <Route path="/getKudos" exact component={KudosListPage}/>
            <Route path="/createKudos" exact component={KudoCreationPage}/>
            <Route path="/createUsers" exact component={UserCreationPage}/>
            <Route path="/getUsers" exact component={UsersListPage}/>
          </Switch>
         
        </div>
      </Router>
    );
  }
}

