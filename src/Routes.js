import React from 'react';
import {Switch,Route} from "react-router-dom";

import KudosListPage from './View/Kudo/GetKudos/index';
import KudoCreationPage from './View/Kudo/CreateKudo/index';
import UserCreationPage from './View/User/CreateUser/index';
import UsersListPage from './View/User/GetUsers/index';


export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact/>
            <Route path="/getKudos" exact component={KudosListPage}/>
            <Route path="/createKudos" exact component={KudoCreationPage}/>
            <Route path="/createUsers" exact component={UserCreationPage}/>
            <Route path="/getUsers" exact component={UsersListPage}/>
        </Switch>
    );
}