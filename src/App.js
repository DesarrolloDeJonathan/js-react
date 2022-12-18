import React, { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [keyword, setKeyword] = useState("GTA");
  return (
    <div className="App">
      <section className="App-content">
        {/* y para evitar caer en un loop infinito este no puede regresarnos al estado anterior */}
        <button onClick={() => setKeyword("mapache")}>Cambiar Keyword</button>
        {/* Tenemos en la aplicacion el componente ListOfGifs al que le pasamos una prop keyword para hacer la llamada a la API */}
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
