import React from "react";
import { Link, Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h3>Home App</h3>
        {/* Agregamos Link en vez de <a> para optimizar y evitar recargas en la pagina */}
        <Link to="/gif/Colombia">Gifs de Colombia</Link>
        <Link to="/gif/Chile">Gifs de Chile</Link>
        <Link to="/gif/Peru">Gifs de Peru</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
        {/* <ListOfGifs keyword="depredador" /> */}
      </section>
    </div>
  );
}

export default App;
