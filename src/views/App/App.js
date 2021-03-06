import React, { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import "./App.css";

function App() {
  const [movies, setmovies] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=5bd2a455e1cf8bc309c464ef32ca71c1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then((res) => res.json())
      .then((res) => {
        setmovies(res);
      })
      .catch();
  });
  return (
    <div className="App">
      {movies ? (
        <div>
          {movies.results.map((
            movie //map = for
          ) => (
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default App;
