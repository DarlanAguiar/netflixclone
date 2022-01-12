import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import "./MovieRow.css";

const MovieRow = ({ title, items, handleClickTheme }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = (e) => {
    let x = scrollX + Math.round(window.innerWidth / 2.3);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRrightArrow = (e) => {
    //limitando a visualizaçao da direita
    // x recebe o que contém nele menos alargura da tela dividido por 2.3
    let x = scrollX - Math.round(window.innerWidth / 2.3);

    let listW = items.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onMouseDown={handleLeftArrow}>
        <MdNavigateBefore style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRrightArrow}>
        <MdNavigateNext className="icone" />
      </div>

      <div className="movieRow--listArea">
        <div className="movieRow--list" style={{ marginLeft: scrollX }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  onClick={() => handleClickTheme(item)}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
