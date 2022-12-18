import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

// En vez de enviar los gifs Pasamos la palabra clave que queremos usar para buscar
export default function ListOfGifs({ keyword }) {
  // Llega la prop keyword, hay un estado incial que es un array vacio sin resultados al principio
  const [gifs, setGifs] = useState([]);

  // Luego hacemos un efecto de forma que la primera vez que se renderize haremos una llamada a la API con esa keyword que pasamos por parametro
  useEffect(
    function () {
      // Esta keyword es una dependencia del efecto
      getGifs({ keyword }).then((gifs) => setGifs(gifs));
    },
    [keyword],
  );

  return gifs.map(({ id, title, url }) => (
    // Warning: Each child in a list should have a unique "key" prop
    // usar un id unico ayuda a optimizar el renderizado mejor ya que lo podra identificar
    <Gifs key={id} id={id} title={url} url={url} />
  ));
}
