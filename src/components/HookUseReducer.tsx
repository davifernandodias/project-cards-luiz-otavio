// import { usePerson } from "../reducers/usePerson";

import { useReducer } from "react";
type initialProps = {
  text: string;
  count: number;
}
const initialInterfaceProps: initialProps = {
  text: "",
  count: 0  
}
type Action = {
  type: "CHANGE_TEXT" | "CHANGE_COUNT";
  payload: string | number;
}
const reducer = (state: initialProps, action: Action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      if(state.text === "davi") return {...state, text: "joão" as string}
      return {...state, text: action.payload as string}
    case "CHANGE_COUNT":
      return {...state, count: state.count + (action.payload as number)}
    default:
      return state
  }
}
export default function HookUseReducer() {

  const [ state, dispatch ] = useReducer(reducer, initialInterfaceProps);
  const handleChangeText = () => {
    dispatch({type: "CHANGE_TEXT",payload: "davi"})
  }
  const handleChangeNumber = () => {
    dispatch({ type: "CHANGE_COUNT", payload: 1})
  }

  

  return (
    <div className="flex flex-col">
      <h1>HookUseReducer</h1>
      <div className="flex flex-col bg-red-500">

      <h1>{state.count}</h1>
      <h1>{state.text}</h1>
      <button onClick={handleChangeText}>mudar para davi</button>
      <button onClick={handleChangeNumber}>mais um</button>
      </div>
      <hr />
    </div>
  );
}
