import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keywords }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keywords }).then((gifs) => setGifs(gifs));
  }, []);

  return gifs.map(({ id, title, url }) => (
    // Solo pasamos lo que necesitamos ademas que vemos expecificamente que estamos pasando
    <Gifs id={id} title={url} url={url} />
    // podriamos optar por pasarle todas las propiedades {...gifs} en caso que necesitemos todos lo datos eh
  ));
}
