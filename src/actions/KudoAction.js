import axios from 'axios';

//Actions Type
export const ADD_KUDO = "add_kudo";
export const GET_KUDOS = "get_kudos"
export const ERROR = "error";

var state = "";
var data = [];

function validade() {

  state.error = "";

  if (!state.sender) {
    state.error = "Sender field cannot be blank!";
      return false;
  }

  if (!state.receiver) {
    state.error = "Receiver field cannot be blank!";
      return false;
  }

  if (!state.message) {
    state.error = "Message field cannot be blank!";
      return false;
  }

  if (!state.layout) {
    state.error = "Layout field cannot be blank!";
      return false;
  }

  return true;

}

function createKudo(){
  var request = new Request('http://localhost:8080/kudos');

  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(state)
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
}

function getAllKudos(){
  axios.get('http://localhost:8080/kudos')
  .then(response => {
    console.log(response.data);
    return response.data;
  })
  .then(function(response){
      console.log(response);
      data = response;
      alert("Got all kudos");
  });
}


function getAllKudos2(){
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
        return response.json;    
      }
      else{
        throw new Error("a");
      }
    
  })
  .then(function(response){
    console.log(response.toString);
    alert("Got all kudos 2");
  });
}

/***************************************************************************************************************************************************************/

//Actions 
export function addKudo(data) {

  state = data;

  if (validade()) {
    createKudo();
    
    return{
    type: ADD_KUDO,
    data: data,
  }
 }

  return{
    type: ERROR,
  }
};

export function getKudos() {
  getAllKudos2();
  console.log(data);
  return{
    type: GET_KUDOS,
  }
};