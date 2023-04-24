import { useEffect, useState } from "react";
import rawData from "./../data.json";

export default function MovieCard() {
  const [data, setData] = useState(rawData);
  useEffect(() => {
    setData([...data.filter((movie) => movie.isTrending)]);
  }, []);
  return (
    <div className=" grid grid-cols-2">
      {data.map((movie) => (
        <div>
            <div className=" absolute left-3/4">
              {movie.isBookmarked ? "booked" : "not booked"}
            </div>
            <img src={movie.thumbnail.regular.small} alt="" />
            <div>
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
