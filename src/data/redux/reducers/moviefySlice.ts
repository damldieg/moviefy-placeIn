import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListedMovie } from "../../../domain/models/ListedMovie";
import { RatedMovie } from "../../../domain/models/RatedMovie";
import { RequestState } from "../../../types/RequestState";

export const moviefySlice = createSlice({
    name: 'moviefy',
    initialState: {
        moviefyLoadState: 'idle' as RequestState,
        listedMovies: [] as ListedMovie[],
        ratedMovies: [] as RatedMovie[],
    },
    reducers: {
        addMoviesList: (state, action: PayloadAction<ListedMovie[]>) => {
            return {
                ...state,
                listedMovies: action.payload,
            }
        },
        setMoviefyLoadState: (state, action: PayloadAction<RequestState>) => {
            return { ...state, moviefyLoadState: action.payload}
        },
        addRatedMovie: (state, action: PayloadAction<RatedMovie>) => {
            return {
                ...state,
                ratedMovies: [...state.ratedMovies, action.payload]
            }
        }
    }
})

export const { addMoviesList, setMoviefyLoadState, addRatedMovie } = moviefySlice.actions

export default moviefySlice.reducer