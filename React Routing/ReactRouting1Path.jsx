import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactRouting1Path_Home from "./ReactRouting1Path_Home";
import ReactRouting1Path_Register from "./ReactRouting1Path_Register";
import ReactRouting1Path_Login from "./ReactRouting1Path_Login";
import ReactRouting1Path_Next from "./ReactRouting1Path_Next";
import ReactRouting1Path_PageNotFound from "./ReactRouting1Path_PageNotFound";
function ReactRouting1Path() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ReactRouting1Path_Home />}></Route>
        <Route
          path="/register"
          element={<ReactRouting1Path_Register />}
        ></Route>
        <Route path="/login" element={<ReactRouting1Path_Login />}></Route>
        <Route path="/next" element={<ReactRouting1Path_Next />}></Route>
        <Route path="*" element={<ReactRouting1Path_PageNotFound />}></Route>
      </Routes>
    </div>
  );
}
export default ReactRouting1Path;
