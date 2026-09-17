import { useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCard = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  return (
    <>
    <div className="bg-white shadow-md group w-full overflow-hidden rounded-2xl  transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-64 w-full overflow-hidden">
        <img
          className="h-full w-full  transition duration-300 group-hover:scale-105 object-cover"
          src={movie?.image?.medium}
          alt={movie?.name}
        />
      </div>

      <div className="p-4">
        <h2 className="truncate  font-bold text-gray-900 text-lg">
          {movie?.name}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-600 mt-2 ">
          <span>⭐ {movie?.rating?.average}</span>
          <span>📅 {movie?.premiered}</span>
        </div>

        <button
          onClick={() => setSelectedMovie(movie)}
          type="button"
          className="mt-4 w-full  bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 cursor-pointer rounded-lg"
        >
          See Details
        </button>
      </div>
    </div>
  
      {selectedMovie && <MovieDetailsModal selectedMovie={selectedMovie} onClose={()=>setSelectedMovie(null)}/>}
    </>
  );
};

export default MovieCard;
