import React, { Component } from 'react';
import UserForm from './UserForm';



export default class User extends Component{

    onSubmitUser = fields => {
    
        var request = new Request('http://localhost:8080/users');
    
        var options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(fields)
        };
        
        fetch(request,options)
        .then(function (response){
            if (response.ok) {
              return response.json;    
            }
            else{
              throw new Error("a");
            }
          
        })
        .then(function(response){
          console.log(response);
          alert("User created");
        });
      };
    render() { 
        return (
        <div>
            <h3>Create User</h3>
                <UserForm onSubmitUser={fields => this.onSubmitUser(fields)} />
        </div>
        );
    }
}