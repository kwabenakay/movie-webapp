import { useState, useEffect } from "react";
import rawData from "./../data.json";
export default function Carousel() {
  const [data, setData] = useState(rawData);
  useEffect(() => {
    setData([...data.filter((movie) => movie.isTrending)]);
  }, []);

  return (
    <div className=" grid grid-flow-col gap-4 px-4 overflow-x-auto no-scrollbar">
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
  );
}
