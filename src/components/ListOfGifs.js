import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword],
  );

  // React no trata tan bien a los arreglos asi que lo envolvemos dentro de un div
  // ya que funciona mejor con componentes
  return (
    <div>
      {gifs.map(({ id, title, url }) => (
        <Gifs key={id} id={id} title={url} url={url} />
      ))}
    </div>
  );
}
