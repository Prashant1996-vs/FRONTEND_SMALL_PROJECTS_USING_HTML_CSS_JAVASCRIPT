import React, { useEffect } from "react";
import "./Tictactoe.css";
import { useState } from "react";
function Tictactoe() {
  const [xo, setXO] = useState("X");
  const [update, setUpdate] = useState("");
  const [turn, setTurn] = useState(["", "", "", "", "", "", "", "", ""]);
  let strX = "";
  let strO = "";
  const handleTurn = (count) => {
    if (turn[count] == "" && count == 0) {
      setTurn([
        xo,
        turn[1],
        turn[2],
        turn[3],
        turn[4],
        turn[5],
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 1) {
      setTurn([
        turn[0],
        xo,
        turn[2],
        turn[3],
        turn[4],
        turn[5],
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 2) {
      setTurn([
        turn[0],
        turn[1],
        xo,
        turn[3],
        turn[4],
        turn[5],
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 3) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        xo,
        turn[4],
        turn[5],
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 4) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        turn[3],
        xo,
        turn[5],
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 5) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        turn[3],
        turn[4],
        xo,
        turn[6],
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 6) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        turn[3],
        turn[4],
        turn[5],
        xo,
        turn[7],
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 7) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        turn[3],
        turn[4],
        turn[5],
        turn[6],
        xo,
        turn[8],
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    } else if (turn[count] == "" && count == 8) {
      setTurn([
        turn[0],
        turn[1],
        turn[2],
        turn[3],
        turn[4],
        turn[5],
        turn[6],
        turn[7],
        xo,
      ]);
      if (xo == "X") {
        setXO("O");
      } else {
        setXO("X");
      }
    }
    let win = ["012", "036", "048", "345", "147", "246", "678", "258"];
    turn.forEach((d, i) => {
      if (d == "X") {
        strX += i;
        if (strX.length > 2) {
          win.forEach((w) => {
            if (
              strX.includes(w[0]) &&
              strX.includes(w[1]) &&
              strX.includes(w[2])
            ) {
              setUpdate("X Wins");
            //   fill();
            }
          });
        }
      }
      if (d == "O") {
        strO += i;
        if (strO.length > 2) {
          win.forEach((w) => {
            if (
              strO.includes(w[0]) &&
              strO.includes(w[1]) &&
              strO.includes(w[2])
            ) {
              setUpdate("O Wins");
            //   fill();
            }
          });
        }
      }
    });
  };
  const fill = () => {
    turn.forEach((d, i) => {
      if (d == "") {
        console.log(i);
      }
    });
  };
  return (
    <div className="dja main">
      <div className="dja inner">
        <div onClick={() => handleTurn(0)} className="dja blocks bb br b-r">
          {turn[0]}
        </div>
        <div onClick={() => handleTurn(1)} className="dja blocks">
          {turn[1]}
        </div>
        <div onClick={() => handleTurn(2)} className="dja blocks bb bl b-r ">
          {turn[2]}
        </div>
        <div onClick={() => handleTurn(3)} className="dja blocks">
          {turn[3]}
        </div>
        <div onClick={() => handleTurn(4)} className="dja blocks b b-r ">
          {turn[4]}
        </div>
        <div onClick={() => handleTurn(5)} className="dja blocks">
          {turn[5]}
        </div>
        <div onClick={() => handleTurn(6)} className="dja blocks bt br b-r ">
          {turn[6]}
        </div>
        <div onClick={() => handleTurn(7)} className="dja blocks">
          {turn[7]}
        </div>
        <div onClick={() => handleTurn(8)} className="dja blocks bt bl b-r ">
          {turn[8]}
        </div>
      </div>
      <br></br>
      <h1>{update}</h1>
    </div>
  );
}
export default Tictactoe;
