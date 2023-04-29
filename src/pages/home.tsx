import { useState } from "react";
import Carousel from "../components/Carousel";
import rawData from "./../data.json";
import MovieCard from "../components/MovieCard";
import { movie } from "../dataTypes";

export default function Home() {
  const [data, setData] = useState<movie[]>(rawData);
  return (
    <div className=" mt-6">
      <Carousel movies={data} />
      <div className=" pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6">Recommended for you </div>
        <MovieCard movies={data} />
      </div>
    </div>
  );
}
