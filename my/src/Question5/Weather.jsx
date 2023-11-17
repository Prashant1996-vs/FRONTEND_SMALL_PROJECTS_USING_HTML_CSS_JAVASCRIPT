import React from "react";
function Weather(props) {
  return (
    <>
      <div>{props.res ? <h1>{props.cityName}</h1> : <></>}</div>
    </>
  );
}
export default Weather;
