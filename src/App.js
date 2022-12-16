import React, { useEffect, useState } from "react";
import "./App.css";

const apiURL =
  "https://api.giphy.com/v1/gifs/search?api_key=bJGTQgB4JGsugesXlHI0749r6yO2gwGX&q=panda&limit=12&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log(" efecto ejecutado update gifs");
    // Usa lo que te ofrece la plataforma aveces no vine bien usar axios
    // En caso que no este soportado fetch() usa unfetch() pesa 500bytes
    fetch(apiURL)
      .then((response) => response.json())
      .then((response) => {
        // agregamos un valor por defecto cuando para data cuando venga undefined (seguridad) (edge cases)
        const { data = [] } = response;
        if (Array.isArray(data)) {
          const gifs = data.map(
            (image) => image.images.fixed_height_downsampled.url,
          );
          console.log(gifs);
          setGifs(gifs);
        }
      });
    // catch
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} />
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
