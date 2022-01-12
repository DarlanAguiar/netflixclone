import React, { useEffect, useState } from "react";

import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  // variável que preenche o lista de filmes
  const [movieList, setMovieList] = useState([]);

  // variavel para preencher o filme em destaque:
  const [FeatureData, setFeatureData] = useState(null);

  //adcionando fundo preto no background do header
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const capturaScroll = () => {
      if (window.scrollY > 50) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", capturaScroll);
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {FeatureData && <FeatureMovie item={FeatureData} />}
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <Footer />
      {movieList.length <= 0 && <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="loading netflix" />
      </div>}
    </div>
  );
};

export default App;
