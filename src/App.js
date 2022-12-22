import React from "react";
import { Route } from "wouter";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h3>Home App</h3>
        <a href="/gif/Colombia">Gifs de Colombia</a>
        <a href="/gif/Chile">Gifs de Chile</a>
        <a href="/gif/Peru">Gifs de Peru</a>
        <Route component={ListOfGifs} path="/gif/:keyword" />
        {/* <ListOfGifs keyword="depredador" /> */}
      </section>
    </div>
  );
}

export default App;
