import React, { useState } from "react";
function CheckList() {
  const options = [
    "Prashant",
    "Mantasha",
    "Vidit",
    "Aakash",
    "Deepak",
    "Mohini",
    "Pragya",
    "Himadri",
    "Sushmita",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionChange = (data) => {
    if (selectedOptions.includes(data)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== data));
    } else {
      setSelectedOptions([...selectedOptions, data]);
    }
  };
  return (
    <div>
      <ul>
        {options.map((data, index) => (
          <li key={index}>
            <label htmlFor={index}>{data}</label>
            <input
              id={index}
              type="checkbox"
              value={data}
              onChange={() => handleOptionChange(data)}
            ></input>
          </li>
        ))}
      </ul>
      <h3>Selected Options:</h3>
      <ul>
        {selectedOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}
export default CheckList;
