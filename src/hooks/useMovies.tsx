import {
  addMovieDetails,
  addMoviesList,
  addRatedMovie,
  addSeachedMoviesList,
  isSearchingMovies,
  setMovieDetailsLoadState,
  setMoviefyLoadState,
} from "../data/redux/reducers/moviefySlice";
import { useDispatch } from "react-redux";
import { MovieDetails } from "../domain/models/MovieDetails";
import { Movies } from "../domain/useCases/Movies";

interface IUseMovies {
  getInitialList(): Promise<void>;
  searchMovie(query: string): Promise<void>;
  getMovieById(id: string): Promise<void>;
  rateMovie(stars: number, comments: string, movie: MovieDetails): void;
}

export const useMovies = (): IUseMovies => {
  const moviesUseCase = new Movies();
  const dispatch = useDispatch();

  const getInitialList = async () => {
    dispatch(setMoviefyLoadState("loading"));
    await moviesUseCase.getAll().then((r) => dispatch(addMoviesList(r)));
    dispatch(setMoviefyLoadState("completed"));
  };

  const searchMovie = async (query: string) => {
    dispatch(setMoviefyLoadState("loading"));
    await moviesUseCase
      .searchMovie(query)
      .then((r) => dispatch(addSeachedMoviesList(r)));
    dispatch(isSearchingMovies(true));
    dispatch(setMoviefyLoadState("completed"));
  };

  const getMovieById = async (id: string) => {
    dispatch(setMoviefyLoadState("loading"));
    await moviesUseCase.getById(id).then((r) => dispatch(addMovieDetails(r)));
    dispatch(setMoviefyLoadState("completed"));
  };

  const rateMovie = async (
    stars: number,
    comments: string,
    movie: MovieDetails
  ) => {
    dispatch(setMovieDetailsLoadState("loading"));
    dispatch(addRatedMovie(moviesUseCase.rateMovie(stars, comments, movie)));
    dispatch(setMovieDetailsLoadState("completed"));
  };

  return {
    getInitialList,
    searchMovie,
    getMovieById,
    rateMovie,
  };
};
