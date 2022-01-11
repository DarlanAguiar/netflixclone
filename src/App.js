import React, { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";

import "./App.css";

const App = () => {
  // variável que preenche o lista de filmes
  const [movieList, setMovieList] = useState([]);

  // variavel para preencher o filme em destaque:
  const [FeatureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista toda
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // pegando um filme para adde em destaque
      let originals = list.filter((item) => item.slug === "originals");
      //gerando um numero aleatório em 0 e quantidades e filmes
      let randomChosem = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      //sorteando um filme da lista
      let escolhido = originals[0].items.results[randomChosem];

      // fezendo uma nova requisição para pegar mais detalhes do escolhido
      let infoEcolhido = await Tmdb.getmovieInfo(escolhido.id, "tv");
      setFeatureData(infoEcolhido);
      
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      {FeatureData && <FeatureMovie item={FeatureData} />}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};

export default App;
