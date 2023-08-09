import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListedMovie } from "../../../domain/models/ListedMovie";
import { RatedMovie } from "../../../domain/models/RatedMovie";
import { RequestState } from "../../../types/RequestState";
import { MovieDetails } from "../../../domain/models/MovieDetails";

export const moviefySlice = createSlice({
    name: 'moviefy',
    initialState: {
        moviefyLoadState: 'idle' as RequestState,
        listedMovies: [] as ListedMovie[],
        ratedMovies: [] as RatedMovie[],
        searchedMovies: [] as ListedMovie[],
        movieDetailsLoadState: 'idle' as RequestState,
        movieDetails: {} as MovieDetails | RatedMovie 
    },
    reducers: {
        addMoviesList: (state, action: PayloadAction<ListedMovie[]>) => {
            return {
                ...state,
                listedMovies: action.payload,
            }
        },
        addSeachedMoviesList: (state, action: PayloadAction<ListedMovie[]>) => {
            return {
                ...state,
                searchedMovies: action.payload,
            }
        },
        setMoviefyLoadState: (state, action: PayloadAction<RequestState>) => {
            return { ...state, moviefyLoadState: action.payload}
        },
        setMovieDetailsLoadState: (state, action: PayloadAction<RequestState>) => {
            return { ...state, movieDetailsLoadState: action.payload}
        },
        addRatedMovie: (state, action: PayloadAction<RatedMovie>) => {
            return {
                ...state,
                ratedMovies: [...state.ratedMovies, action.payload]
            }
        },
        addMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
            return {
                ...state,
                movieDetails: action.payload
            }
        }
    }
})

export const { addMoviesList, setMoviefyLoadState, addRatedMovie, addSeachedMoviesList, addMovieDetails, setMovieDetailsLoadState } = moviefySlice.actions

export default moviefySlice.reducer