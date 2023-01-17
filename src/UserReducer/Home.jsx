import React, { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "INCREMENT")
        return state + 1;
    else {
        if (state <= 0)
            return state;
            
        return state - 1;
    }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      count = {state}
      <br />
      <button onClick={() => dispatch({type:"INCREMENT"})}>button 1</button>
      <button onClick={() => dispatch({type:"DECREMENT"})}>button 2</button>
    </>
  );
}

export default Home;
