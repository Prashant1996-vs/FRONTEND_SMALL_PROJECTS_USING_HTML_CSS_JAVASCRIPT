import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ReactRouting1Path.css";

function ReactRouting1Path_Next() {
  const logout = useNavigate();
  const prev = useNavigate();
  return (
    <div className="dja main">
      <div className="dja inner">
        <button onClick={() => logout("/")}>LOG-OUT</button>
        &nbsp;
        <NavLink to={"/"}>Logout</NavLink>
        <br></br>
        <br></br>
        <button onClick={() => prev(-1)}>PREV</button>
        &nbsp;
        <NavLink to={-1}>Prev</NavLink>
      </div>
    </div>
  );
}

export default ReactRouting1Path_Next;
