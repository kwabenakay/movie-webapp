import { useEffect, useState } from "react";
import rawData from "../data.json";

export default function MovieCard() {
  const [data, setData] = useState(rawData);
  useEffect(() => {
    setData([...data.filter((movie) => movie.isTrending)]);
  }, []);
  return (
    <div>
      <div className=" mb-6">
        Found {data.length} results for {"string input"}
      </div>
      <div className=" grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-7 mini-pc:gap-10 mini-pc:grid-cols-4">
        {data.map((movie, ind) => (
          <div key={movie.title + ind} className=" relative w-fit">
            <div className=" absolute left-3/4">
              {movie.isBookmarked ? "booked" : "not"}
            </div>
            <img
              className=" rounded-lg"
              src={movie.thumbnail.regular.small}
              alt=""
            />
            <div className=" text-xs">
              <span>{movie.year} &bull; </span>
              <span>{movie.category} &bull; </span>
              <span>{movie.rating}</span>
            </div>
            <div className=" tablet:text-xl">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
