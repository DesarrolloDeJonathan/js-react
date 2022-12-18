import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";
import Gif from "./components/Gifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: "programming" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <Gif id={singleGif.id} title={singleGif.url} url={singleGif.url} />
        ))}
        {/* Asi escuchamos eventos */}
        {/* <button onClick={() => setGifs(DIFFERENT_GIFTS)}>
        Cambiar giff
      </button> */}
        {/* <img src={gifs} alt="" srcset="" /> */}
      </section>
    </div>
  );
}

export default App;
