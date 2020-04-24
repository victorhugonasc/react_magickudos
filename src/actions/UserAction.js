export const ADD_KUDO = "add_kudo";


var state = "";



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