import { useMovies } from "../hooks/useMovies";
import { useEffect } from "react";
import { RootState } from "../data/redux/store/store";
import { useSelector } from "react-redux";
import { MoviesList } from "../components/MoviesList";
import { Skeleton } from "../components/Skeleton";

const MainView = () => {
  const { listedMovies, moviefyLoadState } = useSelector(
    (state: RootState) => state.moviefy
  );

  const isLoading = moviefyLoadState === "loading";
  const { getInitialList } = useMovies();

  useEffect(() => {
    listedMovies.length === 0 && getInitialList();
  }, []);

  return <>{isLoading ? <Skeleton /> : <MoviesList />}</>;
};

export { MainView };
