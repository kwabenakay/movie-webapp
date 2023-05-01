import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import MovieCard from "../components/MovieCard";
import { movie } from "../dataTypes";

export default function Home() {
  
  const [data, setData] = useState<movie[]>(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  useEffect(()=>{
      localStorage.setItem("data", JSON.stringify(data));
  },[data])
  

  // toggle bookmark logic
  function toggleBookmark(movie: movie) {
    let output = data.map((film) => {
      if (movie.title === film.title && movie.year === film.year) {
        let temp = { ...film };
        temp.isBookmarked = !film.isBookmarked;
        console.log(temp.title +' \n'+ temp.isBookmarked)
        return temp;
      }
      return film;
    });
    setData([...output]);
  }
  return (
    <div className=" mt-6">
      <Carousel movies={data.filter((movie)=>movie.isTrending)} toggleBookmark={toggleBookmark} />
      <div className=" pr-4 tablet:pr-6 mini-pc:pr-12">
        <div className="py-6">Recommended for you </div>
        <MovieCard movies={data} toggleBookmark={toggleBookmark} />
      </div>
    </div>
  );
}
