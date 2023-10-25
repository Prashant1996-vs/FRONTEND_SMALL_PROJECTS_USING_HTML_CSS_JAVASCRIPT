import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ReactRouting1Path.css";

function ReactRouting1Path_Home() {
  const register = useNavigate();
  const login = useNavigate();
  return (
    <div className="dja main">
      <div className="dja inner">
        <button onClick={() => register("/register")}>REGISTER</button>
        &nbsp;
        <NavLink to={"/register"}>Register</NavLink>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={() => login("/login")}>LOGIN</button>
        &nbsp;
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </div>
  );
}
export default ReactRouting1Path_Home;
