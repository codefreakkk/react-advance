import React from "react";
import ComponentB from "./ComponentB";
import { createContext } from "react";

const Name = createContext();

function ComponentA() {
  return (
    <div>
      <Name.Provider value={"harhs sachin said"}>
        <ComponentB />
      </Name.Provider>
    </div>
  );
}

export default ComponentA;
export {Name}
