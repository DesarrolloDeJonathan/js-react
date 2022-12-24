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
      // Para solucionarlo podriamos recuperar desde aqui el estado
      // Al actualizar el estado podemos pasar una funcion que nos deje como parametro el estado actual
      // De este forma solo tenemos un STATE pero trata de no sobrecargar la logica tratando de agrupar todo en un solo State
      // Una solucion puede ser useReducer
      setGifs((actualGifs) => ({ loading: true, results: actualGifs.results }));

      getGifs({ keyword }).then((gifs) => {
        setGifs({ loading: false, results: gifs });

        // setGifs(gifs);
        // setLoading(false);
      });
    },
    // Este gifs.results lo necesitaremos como dependencia del efecto
    // Pero al hacerlo generamos que el resultado sea si mismo y siempre que cambien los resultados genera un bucle (se pone loco)
    // En lugar de tener esto aquui gifs.results, lo pasamos arriba del estado como actualGifs.results
    [keyword],
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
