import { useSelector } from "react-redux";
import { RootState } from "../data/redux/store/store";
import { Skeleton } from "../components/Skeleton";
import { MovieCard } from "../components/MovieCard";

const MyListView = () => {
  const { ratedMovies, moviefyLoadState } = useSelector(
    (state: RootState) => state.moviefy
  );
  const isLoading = moviefyLoadState === "loading";

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className="mb-16 text-4xl text-white">Rated Movies</h1>
          {ratedMovies.length === 0 ? (
            <h2 className="flex justify-center text-3xl text-white">
              {" "}
              You didn`t rate movies yet...
            </h2>
          ) : (
            <div className="flex flex-wrap justify-center w-full gap-10 m-auto">
              {ratedMovies.map((m, index) => (
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
          )}
        </>
      )}
    </>
  );
};

export { MyListView };
