import { ListedMovie } from "../../domain/models/ListedMovie";
import { MoviesAPIResponse } from "../../types/MoviesAPI";

const EMPTY_CATEGORY = 'empty';

export const listedMoviesAdapter = (apiResponse: MoviesAPIResponse, category?: string): ListedMovie[] => {
    return apiResponse?.results.map((m) => {
        return {
            id: m.id,
            title: m.title,
            releaseDate: m.release_date,
            poster: m.poster_path,
            category: category ?? EMPTY_CATEGORY
        }
    })
} 