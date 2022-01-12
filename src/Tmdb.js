const APY_KEY = "058427dfa1cbf943404f7171e3b696eb";
const API_BASE = "https://api.themoviedb.org/3";

/* lista que buscaremos na API

- Originais Netflix
- recomendados (trending)
- em alta (top Rated)
- comédia
- terror
- romance
- documentários

*/

const basicFatch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFatch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFatch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFatch(
          `/discover/movie?with_network=213&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFatch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFatch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFatch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFatch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFatch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${APY_KEY}`
        ),
      },
    ];
  },
  getmovieInfo: async (movieid, type) => {
    let info = {};

    if (movieid) {
      switch (type) {
        case "movie":
          info = await basicFatch(
            `/movie/${movieid}?language=pt-BR&api_key=${APY_KEY}`
          );
          break;
        case "tv":
          info = await basicFatch(
            `/tv/${movieid}?language=pt-BR&api_key=${APY_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
      return info;
    }
  },
};
