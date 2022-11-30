import React, { useState } from "react";
import './App.css';


function App() {
  const [value, updateValue] = useState(["https://media2.giphy.com/media/8nbh0rkQwd5T2/giphy.gif?cid=ade247d8zxnsfcdqmi7kqhgddyjenei8xmrncqixm735yog1&rid=giphy.gif&ct=g"]) // es lo mismo que tenemos abajo
  // const state = useState([])
  // const value = state[0]
  // const updateValue = state[1]

  return (
    <div className="App">
      <section className="App-content">
        <img src={value} alt="" srcset="" />
      </section>
    </div>
  );
}

export default App;
