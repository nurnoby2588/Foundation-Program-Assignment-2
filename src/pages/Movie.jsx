import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies, searchMovie } from "../services/get-movies";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const loadMovies = async () => {
    const res = await fetchMovies();
    setMovies(res || []);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    const value = searchQuery.trim();
    // setMovies([])
    const result = await searchMovie(value);
    setMovies(result || [])
    setSearchQuery("")
  };
  useEffect(() => {
    loadMovies();
  }, []);
  return (
    <div className=" mt-3 px-4 sm:px-6">
      {/* search bar */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-2 max-w-2xl justify-center items-center flex-col mx-auto sm:flex-row"
      >
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="🔍 Search for a movie... "
          className="border-2 border-gray-400  py-2 px-4 rounded-2xl w-full outline-none transition focus:border-blue-500"
          required
        />
        <div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg bg-blue-700 px-6 py-2 font-medium text-white transition hover:bg-blue-800 sm:w-auto active:scale-95"
          >
            Search
          </button>
        </div>
      </form>

      <section className=" max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Movie;
