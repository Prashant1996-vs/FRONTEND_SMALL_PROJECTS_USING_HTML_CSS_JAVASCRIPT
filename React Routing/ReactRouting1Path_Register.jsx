import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ReactRouting1Path.css";

function ReactRouting1Path_Register() {
  const login = useNavigate();
  const home = useNavigate();
  return (
    <div className="dja main">
      <div className="dja inner">
        <button onClick={() => login("/login")}>LOGIN</button>
        &nbsp;
        <NavLink to={"/login"}>Login</NavLink>
        <br></br>
        <br></br>
        <button onClick={() => home("/")}>HOME</button>
        &nbsp;
        <NavLink to={"/"}>Home</NavLink>
      </div>
    </div>
  );
}

export default ReactRouting1Path_Register;
