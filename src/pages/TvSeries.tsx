import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { movie } from "../dataTypes";

export default function TvSeries() {

  const [data, setData] = useState<movie[]>(
    JSON.parse(localStorage.getItem("data") || "[]")
  );

  useEffect(() => {
    setData(data.filter((movie) => movie.category === "TV Series"));
  }, []);

  // toggle bookmark logic
  function toggleBookmark(movie: movie) {
    let output = data.map((film) => {
      if (movie.title === film.title && movie.year === film.year) {
        let temp = { ...film };
        temp.isBookmarked = !film.isBookmarked;
        return temp;
      }
      return film;
    });
    setData([...output]);
  }
  return (
    <div className=" mt-6">
      <div className=" pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6 mini-pc:text-2xl">TV Series</div>
        <MovieCard movies={data} toggleBookmark={toggleBookmark}/>
      </div>
    </div>
  );
}
