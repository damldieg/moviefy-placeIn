import { useMovies } from "../hooks/useMovies";
import { useEffect } from "react";
import { RootState } from "../data/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { MoviesList } from "../components/MoviesList";
import { Skeleton } from "../components/Skeleton";
import { isSearchingMovies } from "../data/redux/reducers/moviefySlice";

const MainView = () => {
  const dispatch = useDispatch()
  const { listedMovies, moviefyLoadState } = useSelector(
    (state: RootState) => state.moviefy
  );

  const isLoading = moviefyLoadState === "loading";
  const { getInitialList } = useMovies();

  const onMountingComponent = () => {
    listedMovies.length === 0 && getInitialList();
    dispatch(isSearchingMovies(false))
  }

  useEffect(() => {
    onMountingComponent()
  }, []);

  return <>{isLoading ? <Skeleton /> : <MoviesList />}</>;
};

export { MainView };
