import React, { useEffect, useState } from "react";
import './App.css';

const GIFS = [
  "https://media3.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=ade247d8pqnen0j7wwy847xq7l0p8gc6a5i1h91uxdoijfka&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ade247d8pqnen0j7wwy847xq7l0p8gc6a5i1h91uxdoijfka&rid=giphy.gif&ct=g"
]

const DIFFERENT_GIFTS = [
  "https://media4.giphy.com/media/cnbsOTkEJnq0/giphy.gif?cid=ecf05e478w1ki0s965jz0n7jmdtwp3bkkdrvm9qab6xertbv&rid=giphy.gif&ct=g",
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  // Recibe dos parametros la funcion a ejecutar y las dependencias que tiene este efecto
  // en este caso un array vacio que indica cuantas veces se va a renderizar evitando loop
  // que cada vez que se actualize el estado ejecute el efecto y el efecto ejecuta una actualizacion del estado
  useEffect(function () {
    console.log(' efecto ejecutado');
    setGifs(DIFFERENT_GIFTS)
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/> )
        }
        {/* Asi escuchamos eventos */}
      <button onClick={() => setGifs(DIFFERENT_GIFTS)}>
        Cambiar giff
      </button>
        {/* <img src={gifs} alt="" srcset="" /> */}
      </section>
    </div>
  );
}

export default App;
