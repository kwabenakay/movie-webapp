import { useState, useEffect } from "react";
import rawData from "./../data.json";
import MovieCard from "../components/MovieCard";
import { movie } from "../dataTypes";

export default function Movies() {
  const [data, setData] = useState<movie[]>(rawData);
  useEffect(() => {
    setData(data.filter((movie) => movie.category === "Movie"));
  }, []);
  return (
    <div className=" mt-6">
      <div className=" pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6 mini-pc:text-2xl">Movies</div>
        <MovieCard movies={data} />
      </div>
    </div>
  );
}
