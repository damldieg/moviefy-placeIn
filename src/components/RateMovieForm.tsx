import { useState } from "react";

import { Rating } from "@mui/material";
import { useMovies } from "../hooks/useMovies";
import { MovieDetails } from "../domain/models/MovieDetails";

const RateMovieForm = ({ movie }: { movie: MovieDetails }) => {
  const [formData, setFormData] = useState({ stars: undefined, comments: "" });
  const [formSubmited, setFormSubmited] = useState(false);
  const { rateMovie } = useMovies();    

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const buttonDisabled = !formData.stars || formData.comments.length === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    const { stars, comments } = formData;
    setFormData({ stars: undefined, comments: "" });
    setFormSubmited(true);
    rateMovie(stars, comments, movie);
  };

  return (
    <>
      {formSubmited ? (
        <div>Thanks! This movie was added to your rated movies list!</div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-2/3 p-6 shadow-sm bg-cyan-800 rounded-xl shadow-cyan-800"
        >
          <h3 className="mb-6 text-2xl font-extralight">
            Share with the community what you think about this movie
          </h3>
          <Rating
            name="stars"
            size="large"
            onChange={(_, newValue) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                stars: newValue,
              }));
            }}
          />
          <label htmlFor="comments" className="mt-6 mb-3 text-xl">
            Comments:{" "}
          </label>
          <textarea
            id="comments"
            name="comments"
            onChange={handleOnChange}
            maxLength={280}
            minLength={10}
            className="p-4 text-white rounded-lg shadow-md bg-cyan-700"
          />
          <button
            type="submit"
            disabled={buttonDisabled}
            className="w-1/5 p-2 mt-6 text-xl font-bold border-none rounded-lg bg-cyan-400 text-cyan-800 hover:bg-cyan-700 hover:text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Rate
          </button>
        </form>
      )}
    </>
  );
};

export { RateMovieForm };
