import { useState, useEffect } from "react";
import rawData from "./../data.json";
import MovieCard from "../components/MovieCard";
import { movie } from "../dataTypes";

export default function Bookmark() {
  const [movies, setMovies] = useState<movie[]>(rawData);
  const [series, setSeries] = useState<movie[]>(rawData);
  useEffect(() => {
    setMovies(movies.filter((movie) => movie.isBookmarked && movie.category==="Movie"));
    setSeries(series.filter((movie) => movie.isBookmarked && movie.category==="TV Series"));
  }, []);
  return (
    <div className=" mt-6">
      <div className=" pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6 mini-pc:text-2xl">Bookmarked Movies</div>
        <MovieCard movies={movies} />
      </div>
      <div className=" mt-6 pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6 mini-pc:text-2xl">Bookmarked TV Series</div>
        <MovieCard movies={series} />
      </div>
    </div>
  );
}
