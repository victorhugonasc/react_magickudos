
//Actions Type
export const ADD_KUDO = "add_kudo";

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




//Actions 
export function addKudo(data) {

  state = data;
  console.log(state);
  const isValid = validade();
  console.log(isValid);

  if (isValid) {
       
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


  return{
    type: ADD_KUDO,
    sender: data.sender,
    receiver: data.receiver,
    message: data.message,
    layout: data.layout,
  }
};