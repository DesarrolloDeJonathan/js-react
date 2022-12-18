// seccionamos un poco para acortar la apiURL
const apiKey = "bJGTQgB4JGsugesXlHI0749r6yO2gwGX";
const limit = 50;

// Asignamos parametro por defecto a keyword por si no llega nada o un objeto vacio
export default function getGifs({ keyword = "morty" } = {}) {
  // Pasamos una keyword como parametro de busqueda dentro de apiURL
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=es`;
  return fetch(apiURL)
    .then((response) => response.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        // console.log(gifs);
        return gifs;
      }
    });
}
