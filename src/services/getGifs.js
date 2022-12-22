// seccionamos un poco para acortar la apiURL
const apiKey = "bJGTQgB4JGsugesXlHI0749r6yO2gwGX";
const limit = 9;

export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=es`;
  return fetch(apiURL)
    .then((response) => response.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((gif) => {
          const { images, title, id } = gif;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        console.log(gifs);
        return gifs;
      }
    });
}
