import { useParams } from "react-router-dom";
import { RootState } from "../data/redux/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useMovies } from "../hooks/useMovies";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../assets/placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IMAGES_URL } from "../constants/apiURL";

const MovieDetailsView = () => {
  const { getMovieById } = useMovies();
  const { movieId } = useParams();
  const { movieDetailsLoadState, movieDetails } = useSelector(
    (state: RootState) => state.moviefy
  );
  const isLoading = movieDetailsLoadState === "loading";

  useEffect(() => {
    getMovieById(movieId);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex items-center text-white">
          <div className="flex justify-center w-1/3">
            <LazyLoadImage
              src={`${IMAGES_URL}${movieDetails?.poster}`}
              alt={`${movieDetails?.title} image`}
              width={500}
              height={700}
              placeholderSrc={PlaceholderImage}
              className="object-cover w-full cursor-pointer rounded-xl"
              effect="blur"
            />
          </div>
          <div className="flex flex-col self-start w-2/3 gap-8">
            <h1 className="text-5xl font-medium">{`${movieDetails.title}`}</h1>
            <div className="flex items-center gap-5">
              {movieDetails.genres &&
                movieDetails.genres.map((g) => (
                  <span className="px-4 py-2 font-medium bg-pink-800 rounded-lg">
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
            <div className="flex items-center gap-5">
              <h4 className="text-2xl font-extralight">
                Production companies:
              </h4>
              {movieDetails.productionCompanies &&
                movieDetails.productionCompanies.map((g) => (
                  <span className="px-4 py-2 font-medium bg-orange-800 rounded-lg">
                    {g}
                  </span>
                ))}
            </div>
            <h2 className="text-3xl font-light">
              {`\"${movieDetails.tagline}\"`}
            </h2>
            <p className="text-xl font-normal">{movieDetails.overview}</p>
          </div>
        </div>
      )}
    </>
  );
};

export { MovieDetailsView };
