import { ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

const Navbar = () => {
  const { pathname } = useLocation();
  const isMainPage = pathname === "/";
  const isInMyList = pathname === "/my-list";
  const { searchMovie } = useMovies()

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    searchMovie(e.target.value)
  }

  return (
    <div className="flex items-center justify-between w-full px-4 py-6 text-white bg-black">
      <Link to={"/"}>
        <h2 className="text-4xl font-bold">MovieFy</h2>
      </Link>
      {isMainPage && (
        <input
          type="search"
          className="bg-[#262626] p-2 rounded w-80"
          placeholder="Search..."
          onChange={(e) => handleOnChange(e)}
        />
      )}

      {!isInMyList && (
        <Link
          to={"/my-list"}
          className="p-2 text-xl border rounded border-slate-600 hover:shadow-inner hover:bg-[#262626]"
        >
          My List
        </Link>
      )}
    </div>
  );
};

export { Navbar };
