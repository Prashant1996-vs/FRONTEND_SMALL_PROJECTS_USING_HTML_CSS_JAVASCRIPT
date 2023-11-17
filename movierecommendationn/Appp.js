import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [moviesData, setMoviesData] = useState([]);
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("0");
    return color;
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b60939858ae0aff45d0358ad05c933f4&language=en-US&page=1"
    )
      .then((d) => d.json())
      .then((d) => {
        console.log(d.results);
        setMoviesData(d.results);
      });
  }, []);
  return (
    <>
      <ul style={{ listStyleType: "none" }} className="p">
        {moviesData.map((d, i) => (
          <li key={i}>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w440_and_h660_face${d.backdrop_path})`,
              }}
              className="backoflist"
            ></div>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w440_and_h660_face${d.poster_path})`,
              }}
              className="topinsidelist"
            >
              <div className="dja percentage">
                <div
                  style={{ borderColor: getRandomColor() }}
                  className="dja percentageborder"
                >
                  <span>
                    {Math.floor(d.popularity)}
                    <sup style={{ fontSize: "6px" }}>%</sup>
                  </span>
                </div>
              </div>
            </div>
            <div className="bottominsidelist">
              {/* <div
                style={{ backgroundColor: getRandomColor() }}
                className="cornerDot"
              ></div> */}
              <p className="title">{d.title}</p>
              <p className="date">{d.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
