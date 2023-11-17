import React, { useState } from "react";
import Weather from "./Weather";
function Fifth() {
  const [data, setData] = useState();
  const [propsData, setPropsData] = useState({
    ress: false,
    cityNamee: "",
  });
  const handle = (e) => {
    e.preventDefault();
    setPropsData({ ...propsData, ress: true, cityNamee: data });
    setData("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
        <button onClick={(e) => handle(e)}>Search</button>
      </form>
      <Weather res={propsData.ress} cityName={propsData.cityNamee} />
    </div>
  );
}
export default Fifth;
