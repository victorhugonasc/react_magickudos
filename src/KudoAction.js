
//Actions Type

export const ADD_NUMBER = "add_number";
export const SUBTRACT_NUMBER = "subtract_number";
export const GET_ALL_KUDOS = "get_all_kudos";
export const ON_SUBMIT_FORM = "onSubmit";

//Actions 

export function addAction() {
  return{
    type: ADD_NUMBER,
    payload: 1,
  }
};

export function subtractAction() {
  return{
    type: SUBTRACT_NUMBER,
    payload: 2,
  }
};

export function getAllKudosAction() {
  return{
    type: GET_ALL_KUDOS,
    payload: 3,
  }
};

export function onSubmitForm() {
  return{
    type: ON_SUBMIT_FORM,
    sender: "5",
    receiver: "6",
    message: "7",
    layout: "8",
  }
};