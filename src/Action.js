
//Actions Type

export const ADD_NUMBER = "add_number";
export const SUBTRACT_NUMBER = "subtract_number";

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
