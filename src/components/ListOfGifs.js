import React, { useEffect, useState } from "react";
import Gifs from "./Gifs";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ keywords }) {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keywords }).then((gifs) => setGifs(gifs));
  }, []);

  return gifs.map(({ id, title, url }) => (
    // Warning: Each child in a list should have a unique "key" prop
    // usar un id unico ayuda a optimizar el renderizado mejor ya que lo podra identificar
    <Gifs key={id} id={id} title={url} url={url} />
  ));
}
