import { IMAGES_URL } from "../constants/apiURL";
import { ListedMovie } from "../domain/models/ListedMovie";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../assets/placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../data/redux/store/store";
import { useSelector } from "react-redux";

const MovieCard = ({
  poster,
  releaseDate,
  title,
  category,
  id,
}: ListedMovie) => {
  const { ratedMovies } = useSelector((state: RootState) => state.moviefy);
  const navigate = useNavigate()
  const ratedMovie = ratedMovies?.find((m) => m.id === id);

  return (
    <>
      <div className="relative flex flex-col items-center w-1/5 gap-4 pb-4 mb-6 text-white rounded-xl hover:scale-100">
        <div className="absolute z-50 flex flex-col gap-2 -left-2 top-4">
          {category !== "empty" && (
            <span className="px-2 py-1 font-bold bg-pink-700 rounded-e-xl">
              {category?.toUpperCase()}
            </span>
          )}
          {ratedMovie && (
            <span className="px-2 py-1 font-bold bg-[#d4af37] rounded-e-xl w-fit">
              RATED
            </span>
          )}
        </div>
          <LazyLoadImage
            src={`${IMAGES_URL}${poster}`}
            alt={`${title} image`}
            width={350}
            height={550}
            placeholderSrc={PlaceholderImage}
            className="object-cover w-full cursor-pointer rounded-xl"
            effect="blur"
            onClick={() => navigate(`/movie-details/${id}`)}
          />
        <h3 className="text-xl font-extrabold text-center">{title}</h3>
        <h4 className="text-lg">{releaseDate.toString()}</h4>
      </div>
    </>
  );
};

export { MovieCard };
