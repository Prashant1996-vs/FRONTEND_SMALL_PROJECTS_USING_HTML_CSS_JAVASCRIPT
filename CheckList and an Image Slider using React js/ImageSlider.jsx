import React, { useState } from "react";
function ImageSlider() {
  const styling = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  };
  const btn = {
    fontSize: "30px",
    height: "40px",
    width: "40px",
    cursor: "pointer",
    border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "50%",
  };
  const img = {
    height: "200px",
    width: "400px",
    margin: "5px",
  };
  const [imgList, setImgList] = useState([
    "https://th.bing.com/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&w=310&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.1YM53mG10H_U25iPjop83QHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.Vt3kGu4X6WQlmH91GpJpzgHaFH&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.c4MCiDFgSGLsR_7-4-j0PwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.nyFLBYjD207JNHC4hBQBAwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.i-Xdb3eu9ihga0frrt1tWQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.roeJGz3eeyhxK3XRQ0LxpQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
  ]);
  const [counter, setCounter] = useState(0);
  const next = () => {
    if (counter < imgList.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  const prev = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(imgList.length - 1);
    }
  };
  return (
    <div style={styling}>
      <button style={btn} onClick={() => prev()}>
        {"<"}
      </button>
      <img style={img} src={imgList[counter]}></img>
      <button style={btn} onClick={() => next()}>
        {">"}
      </button>
    </div>
  );
}
export default ImageSlider;
