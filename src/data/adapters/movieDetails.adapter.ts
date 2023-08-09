import { MovieDetails } from "../../domain/models/MovieDetails";
import { MovieDetailsAPIResponse } from "../../types/MoviesAPI";

export const movieDetailsAdapter = (response: MovieDetailsAPIResponse): MovieDetails => {
    return {
        id: response.id,
        title: response.title,
        releaseDate: response.release_date,
        poster: response.poster_path,
        genres: response.genres?.map((g) => g.name) ?? [''],
        overview: response.overview,
        runtime: response.runtime,
        tagline: response.tagline,
        productionCompanies: response.production_companies?.map((c) => c.name) ?? ['']
    }
}