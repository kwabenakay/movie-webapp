import { useEffect, useState } from "react";
import rawData from "./../data.json";

export default function MovieCard() {
  const [data, setData] = useState(rawData);
  useEffect(() => {
    setData([...data.filter((movie) => movie.isTrending)]);
  }, []);
  return (
    <div className=" grid grid-cols-2 gap-4 tablet:grid-cols-3">
      {data.map((movie,ind) => (
        <div key={movie.title+ind} className=" relative w-fit">
            <div className=" absolute left-3/4">
              {movie.isBookmarked ? "booked" : "not booked"}
            </div>
            <img className=" rounded-lg" src={movie.thumbnail.regular.small} alt="" />
            <div className=" text-xs">
            <span>{movie.year}</span>
            <span>{movie.category}</span>
            <span>{movie.rating}</span>
            </div>
            <div>{movie.title}</div>
        </div>
      ))}
    </div>
  );
}
