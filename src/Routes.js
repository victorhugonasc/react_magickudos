import React from 'react';
import {Switch,Route} from "react-router-dom";
import GetKudos from './View/Kudo/GetKudos';
import CreateKudo from './View/Kudo/CreateKudo';
import CreateUser from './View/User/CreateUser';
import GetUsers from './View/User/GetUsers';
import GetHistory from './View/History';

export const home = "/";
export const getKudos = "/getKudos";
export const createKudos = "/createKudos";
export const createUsers = "/createUsers";
export const getUsers = "/getUsers";
export const getHistory = "/history"

export default function Routes(){
    return (
        <Switch>
            <Route path={home} exact/>
            <Route path= {getKudos} exact component={GetKudos}/>
            <Route path={createKudos} exact component={CreateKudo}/>
            <Route path={createUsers} exact component={CreateUser}/>
            <Route path={getUsers} exact component={GetUsers} />
            <Route path={getHistory} exact component={GetHistory}/>
        </Switch>
    );
}