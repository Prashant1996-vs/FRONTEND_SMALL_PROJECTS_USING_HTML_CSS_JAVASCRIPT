import React from "react";
import { ContextApi2CtreateContext } from "./ContextApi2CtreateContext";
import { ContextApi3ChildA } from "./ContextApi3ChildA";
export const ContextApi1Main = () => {
  return (
    <div>
      <ContextApi2CtreateContext.Provider value={"Prashant"}>
        <ContextApi3ChildA />
      </ContextApi2CtreateContext.Provider>
    </div>
  );
};
