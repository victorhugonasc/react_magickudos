import React, { Component } from 'react';
import KudoForm from './KudoForm';


export default class Kudo extends Component{

    /*onSubmit = field => {
      console.log("pai");
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
      };*/
   
    render() { 

        return (
        <div>
            <h3>Create Kudo</h3>
            <KudoForm onSubmit={x => this.onSubmit(x)} />
            
        </div>
        );
    }
}