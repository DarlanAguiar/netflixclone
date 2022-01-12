import React from "react";
import { BsPlus, BsPlayFill } from "react-icons/bs";

import "./FeatureMovie.css";

const FeatureMovie = ({ item }) => {
  //pegandpo a data do item
  const data = new Date(item.first_air_date);

  //pegado os generos (precisa de array pois é mais de um);
  let genero = [];
  for (let i in item.genres) {
    genero.push(item.genres[i].name);
  }

  let generosJuntos = genero.join(", ");

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      {/* estas duas divs servem para fazer o degradê escuro no css */}
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} Pontos</div>
            <div className="featured--year">
              {data.getFullYear().toString().length === 4
                ? data.getFullYear()
                : ""}
            </div>
            <div className="featured--seasons">
              {item.number_of_seasons
                ? `${item.number_of_seasons} Temporada`
                : "Filme"}
              {item.number_of_seasons > 1 ? "s" : ""}
            </div>
            <div className="featured--description">{item.overview}</div>
            <div className="feature--buttons">
              <a className="botao--assistir" href={`/watch/${item.id}`}>
                <BsPlayFill /> Assistir
              </a>
              <a className="botao--lista" href={`/list/${item.id}`}>
                <BsPlus /> Minha Lista{" "}
              </a>
            </div>

            <div className="featured--genres">
              <strong>Gênero:</strong>{" "}
              {generosJuntos.length > 0
                ? `${generosJuntos}`
                : "Sem Classifição"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
