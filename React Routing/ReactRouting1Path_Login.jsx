import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ReactRouting1Path.css";

function ReactRouting1Path_Login() {
  const next = useNavigate();
  return (
    <div className="dja main">
      <div className="dja inner">
        <h1>Login successfully</h1>
        <img src="./logo192.png"></img>
        <br></br>
        <br></br>
        <button onClick={() => next("/next")}>NEXT</button>
        <br></br>
        <NavLink to={"/next"}>Next</NavLink>
      </div>
    </div>
  );
}

export default ReactRouting1Path_Login;
