import { useReducer } from "react";

// etapa 1
type Person = {
  firstName: string;
  lastName: string;
}

type Action = {
  type: "CHANGE_FIRST_NAME" | "CHANGE_LAST_NAME";
  payload: string;
}

const reducer = ( state : Person , action : Action) => {
  switch (action.type) {
    
    case "CHANGE_FIRST_NAME":
      return {...state, firstName: action.payload}
    
    case "CHANGE_LAST_NAME":
      return {...state, lastName: action.payload }
    
    default:
      return state;
    
    }
}

// etapa 2

const initialState: Person = {
  firstName: "",
  lastName: ""
}

export const usePerson = () => useReducer(reducer, initialState);