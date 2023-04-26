import { useState, useEffect } from "react";
import { movie } from "../dataTypes";

export default function Carousel(Prop: { movies: movie[] }) {
  const [data, setData] = useState(Prop.movies);
  useEffect(() => {
    setData([...data.filter((movie) => movie.isTrending)]);
  }, []);

  return (
    <div>
      <div className=" pb-4">Trending</div>
      <div className=" grid grid-flow-col gap-4 overflow-x-auto no-scrollbar">
        {data.map((movie, ind) => (
          <div
            key={movie.title + ind}
            className=" w-60 h-36 tablet:w-[470px] tablet:h-fit"
          >
            <div className=" h-0 relative ">
              <div className=" absolute left-3/4">
                {movie.isBookmarked ? "booked" : "not booked"}
              </div>
              <div className=" absolute top-24 pl-4 pb-4 tablet:top-48 tablet:pl-6 tablet:pb-6">
                <div className=" flex gap-3 text-xs font-light tablet:text-sm">
                  <span>{movie.year}</span>
                  <span>{movie.category}</span>
                  <span>{movie.rating}</span>
                </div>
                <div className=" font-semibold tablet:text-2xl">
                  {movie.title}
                </div>
              </div>
            </div>
            <img
              className="rounded-md"
              src={movie.thumbnail.trending?.small}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
