import { movie } from "../dataTypes";

export default function MovieCard(Prop: { movies: movie[] }) {
  return (
    <div className=" grid grid-cols-2 gap-4 tablet:grid-cols-3 tablet:gap-7 mini-pc:gap-10 mini-pc:grid-cols-4">
      {Prop.movies.map((movie, ind) => (
        <div key={movie.title + ind} className=" relative w-fit">
          <div className=" absolute left-3/4">
            {movie.isBookmarked ? "booked" : "not"}
          </div>
          <img
            className=" rounded-lg"
            src={movie.thumbnail.regular.small}
            alt={movie.title}
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
  );
}
