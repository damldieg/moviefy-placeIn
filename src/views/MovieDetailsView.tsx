import { useParams } from "react-router-dom";
import { RootState } from "../data/redux/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../assets/placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IMAGES_URL } from "../constants/apiURL";
import { RateMovieForm } from "../components/RateMovieForm";
import { Rating } from "@mui/material";

const MovieDetailsView = () => {
  const { getMovieById } = useMovies();
  const { movieId } = useParams();
  const { movieDetailsLoadState, movieDetails, ratedMovies } = useSelector(
    (state: RootState) => state.moviefy
  );
  const isLoading = movieDetailsLoadState === "loading";

  const ratedMovie = ratedMovies?.find((m) => m.id === movieDetails.id);

  useEffect(() => {
    getMovieById(movieId);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex items-center text-white">
          <div className="flex justify-center w-1/3 self-baseline">
            <LazyLoadImage
              src={`${IMAGES_URL}${movieDetails?.poster}`}
              alt={`${movieDetails?.title} image`}
              placeholderSrc={PlaceholderImage}
              className="object-cover w-full h-full cursor-pointer rounded-xl"
              effect="blur"
            />
          </div>
          <div className="relative flex flex-col self-start w-2/3 gap-8">
            <h1 className="text-5xl font-medium">{`${movieDetails.title}`}</h1>
            <div className="flex items-center gap-5">
              {movieDetails.genres &&
                movieDetails.genres.map((g, index) => (
                  <span
                    key={`${g}/${index}`}
                    className="px-4 py-2 font-medium bg-pink-800 rounded-lg"
                  >
                    {g}
                  </span>
                ))}
            </div>
            <div className="flex gap-6">
              <h4 className="text-2xl font-thin">
                {`Release date: ${movieDetails.releaseDate?.toString()}`}
              </h4>
              <div className="w-[1px] bg-white" />
              <h4 className="text-2xl font-thin">{`Duration: ${movieDetails.runtime}m`}</h4>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <h4 className="text-2xl font-extralight">
                Production companies:
              </h4>
              {movieDetails.productionCompanies &&
                movieDetails.productionCompanies.map((c, index) => (
                  <span
                    key={`${c}/${index}`}
                    className="px-4 py-2 font-medium bg-orange-800 rounded-lg"
                  >
                    {c}
                  </span>
                ))}
            </div>
            <h2 className="text-3xl italic font-light">
              {`\"${movieDetails.tagline}\"`}
            </h2>
            <p className="text-xl font-normal">{movieDetails.overview}</p>
            <div className="w-[80%] h-[1px] bg-white m-auto" />
            {!ratedMovie ? (
              <RateMovieForm movie={movieDetails} />
            ) : (
              <>
                <div className="absolute right-0 top-3">
                  <Rating value={ratedMovie?.stars} readOnly size="large" />
                </div>
                <div className="text-2xl italic">
                  <span className="font-thin ">Your review:</span> {`"${ratedMovie?.comments}"`}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { MovieDetailsView };
