import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  // const [loading, setLoading] = useState([]);
  // En lugar de tener un array tendremos un objeto que tenga dos llaves
  const [gifs, setGifs] = useState({ loading: false, results: [] });

  useEffect(
    function () {
      // setLoading(true);
      setGifs({ loading: true, results: gifs.results });
      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });

        // setGifs(gifs);
        // setLoading(false);
      });
    },
    // Este gifs.results lo necesitaremos como dependencia del efecto
    // Pero al hacerlo generamos que el resultado siempre cambie y genera un bucle (se pone loco)
    [gifs.results, keyword],
  );

  if (gifs.loading) return <i>Cargando 🥳</i>;

  // React no trata tan bien a los arreglos asi que lo envolvemos dentro de un div
  // ya que funciona mejor con componentes
  return (
    <div>
      {gifs.results.map(({ id, title, url }) => (
        <Gifs key={id} id={id} title={url} url={url} />
      ))}
    </div>
  );
}
