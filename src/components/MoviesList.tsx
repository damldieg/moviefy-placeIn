import { RootState } from "../data/redux/store/store";
import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

const MoviesList = () => {
  const { listedMovies, searchedMovies } = useSelector(
    (state: RootState) => state.moviefy
  );

  const movies = searchedMovies.length > 0 ? searchedMovies : listedMovies;
  return (
    <div className="flex flex-wrap justify-center w-full gap-10 m-auto">
      {movies.map((m, index) => (
        <MovieCard
          key={`${m.id}/${m.title}/${index}`}
          id={m.id}
          poster={m.poster}
          releaseDate={m.releaseDate}
          title={m.title}
          category={m.category}
        />
      ))}
    </div>
  );
};

export { MoviesList };
