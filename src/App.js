import React, { useEffect, useState } from "react";
import "./App.css";
import getGifs from "./services/getGifs";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword: "hacking" }).then((gifs) => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          //Warning: Each child in a list should have a unique "key" prop.
          <div key={singleGif.id}>
            <h6>{singleGif.title}</h6>
            <img alt={singleGif.title} src={singleGif.url} />
          </div>
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
