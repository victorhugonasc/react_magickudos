import axios from 'axios';

//Actions Type
export const ADD_KUDO = "add_kudo";
export const GET_KUDOS = "get_kudos"
export const ERROR = "error";

var state = "";

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
    return response.data;
  })
  .then(function(response){
      console.log(response);
      
      alert("Got all kudos");
      
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
  getAllKudos();
  return{
    type: GET_KUDOS,
  }
};