import React, { useState } from "react";
function Todolist() {
  const [arr, setArr] = useState();
  const [arrArray, setArrArray] = useState([]);
  const addArrayData = (e) => {
    e.preventDefault();
    // let newArr = [];
    // newArr.push(arr);
    setArrArray([...arrArray, arr]);
    setArr("");
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <form>
        <input
          type="text"
          value={arr}
          onChange={(e) => setArr(e.target.value)}
        />
        <button onClick={addArrayData}>Add</button>
      </form>
      <ul style={{ listStyleType: "none" }}>
        {arrArray.map((d, i) => (
          <li key={i}>
            {d}&nbsp;
            <button
              style={{
                padding: "2px",
                paddingLeft: "4px",
                paddingRight: "4px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todolist;
