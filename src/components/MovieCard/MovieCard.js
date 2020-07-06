import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const { title, poster_path, overview } = props;
  return (
    <div>
      <h1 className="movietitle">{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
        alt={`${title}`}
      />
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
