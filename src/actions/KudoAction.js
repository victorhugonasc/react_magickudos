
//Actions Type
export const ADD_KUDO = "add_kudo";

//Actions 

export function addKudo(data) {
  return{
    type: ADD_KUDO,
    sender: data.sender,
    receiver: data.receiver,
    message: data.message,
    layout: data.layout,
  }
};