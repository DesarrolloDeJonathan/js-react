import React from "react";
import "./Gifs.css";

// Pasamos los parematro en la funcion llamados props
export default function Gifs({ id, title, url }) {
  return (
    <a href={`#${id}`} className="Gifs">
      <h4>{title}</h4>
      <small>{id}</small>
      <img alt={title} src={url} />
    </a>
  );
}
