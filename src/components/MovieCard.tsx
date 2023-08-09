import { IMAGES_URL } from "../constants/apiURL";
import { ListedMovie } from "../domain/models/ListedMovie";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../assets/placeholder.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const MovieCard = ({
  poster,
  releaseDate,
  title,
  category,
  id,
}: ListedMovie) => {
  return (
    <>
      <div className="relative flex flex-col items-center w-1/5 gap-4 pb-4 mb-6 text-white rounded-xl hover:scale-100">
        {category !== "empty" && (
          <span className="absolute z-50 px-2 py-1 font-bold bg-pink-700 -left-2 rounded-e-xl top-4">
            {category.toUpperCase()}
          </span>
        )}
        <Link to={`movie-details/${id}`}>
          <LazyLoadImage
            src={`${IMAGES_URL}${poster}`}
            alt={`${title} image`}
            width={350}
            height={550}
            placeholderSrc={PlaceholderImage}
            className="object-cover w-full cursor-pointer rounded-xl"
            effect="blur"
          />
        </Link>
        <h3 className="text-xl font-extrabold text-center">{title}</h3>
        <h4 className="text-lg">{releaseDate.toString()}</h4>
      </div>
    </>
  );
};

export { MovieCard };
