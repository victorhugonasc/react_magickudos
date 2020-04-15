import React, { Component } from 'react';
import KudoForm from './KudoForm';
import KudoButton from './KudoButton';

export default class Kudo extends Component{

    onSubmit = field => {
    
        var request = new Request('http://localhost:8080/kudos');
    
        var options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(field)
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
          console.log(response.toString);
          alert("Kudo created");
        });
      };

      onClick = field => {
    
        var request = new Request('http://localhost:8080/kudos');
    
        var options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors',
          cache: 'default',
        };
        
        fetch(request,options)
        .then(function (response){
            if (response.ok) {
                console.log(response.json);
                return response.json;    
            }
            else{
              throw new Error("a");
            }
          
        })
        .then(function(response){
          console.log(response);
          alert("Got all kudos");
        });
      };
   
    render() { 

        return (
        <div>
            <h1>Kudo Page</h1>
            <h2>Create Kudo</h2>
            <KudoForm onSubmit={field => this.onSubmit(field)} />
            <KudoButton onClick={field => this.onClick()}/>
        </div>
        );
    }
}