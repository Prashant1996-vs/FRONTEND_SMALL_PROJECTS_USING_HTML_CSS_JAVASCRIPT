import React, { useContext } from "react";
import { ContextApi2CtreateContext } from "./ContextApi2CtreateContext";
export const ContextApi5ChildC = () => {
  const useContextt = useContext(ContextApi2CtreateContext);
  return (
    <div>
      <ContextApi2CtreateContext.Consumer>
        {(data) => {
          return <p>hello, {data} this side from Ahom tech</p>;
        }}
      </ContextApi2CtreateContext.Consumer>
      <h3>Use Context - {useContextt}</h3>
    </div>
  );
};
