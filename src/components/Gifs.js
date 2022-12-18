import React from "react";

// Pasamos los parematro en la funcion llamados props
export default function Gifs({ id, title, url }) {
  return (
    <div>
      <h6>{title}</h6>
      <small>{id}</small>
      <img alt={title} src={url} />
    </div>
  );
}
