import { X } from "lucide-react";
import React, { useEffect } from "react";
const MovieDetailsModal = ({ onClose, selectedMovie }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  
  if (!selectedMovie) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition hover:scale-95 hover:bg-gray-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
        >
          <X size={20} />
        </button>

        <div className=" overflow-y-auto">
          <div className="pt-2 flex h-[220px] w-full items-center justify-center bg-gray-100 sm:h-[300px] md:h-[400px]">
            {selectedMovie?.image?.original ? (
              <img
                src={selectedMovie.image.original}
                alt={selectedMovie?.name || "Movie poster"}
                className="h-full w-full object-contain "
              />
            ) : (
              <p className="text-sm text-gray-500"> No image available </p>
            )}{" "}
          </div>{" "}
          {/* Movie Details */}{" "}
          <div className="p-4 sm:p-6 md:p-8">
            {" "}
            {/* Title */}{" "}
            <h2 className="pr-10 text-2xl font-bold text-gray-900 sm:text-3xl">
              {selectedMovie?.name || "Unknown Title"}{" "}
            </h2>{" "}
            {/* Rating & Release */}{" "}
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
              <span>
                ⭐ Rating:
                <span className="font-medium text-gray-800">
                  {" "}
                  {selectedMovie?.rating?.average || "N/A"}{" "}
                </span>
              </span>
              <span>
                📅 Release:
                <span className="font-medium text-gray-800">
                  {" "}
                  {selectedMovie?.premiered || "N/A"}
                </span>{" "}
              </span>{" "}
            </div>{" "}
            {/* Genres */}{" "}
            {selectedMovie?.genres?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {" "}
                {selectedMovie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 sm:text-sm"
                  >
                    {" "}
                    {genre}{" "}
                  </span>
                ))}{" "}
              </div>
            )}{" "}
            <div className="mt-5 grid grid-cols-1 gap-3 border-y border-gray-200 py-4 text-sm text-gray-600 sm:grid-cols-2">
              {" "}
              <p>
                {" "}
                🎬 <strong>Type:</strong> {selectedMovie?.type || "N/A"}{" "}
              </p>{" "}
              <p>
                {" "}
                🌐 <strong>Language:</strong>{" "}
                {selectedMovie?.language || "N/A"}{" "}
              </p>{" "}
              <p>
                {" "}
                ⏱️ <strong>Runtime:</strong>{" "}
                {selectedMovie?.runtime
                  ? `${selectedMovie.runtime} minutes`
                  : "N/A"}{" "}
              </p>{" "}
              <p>
                {" "}
                📺 <strong>Network:</strong>{" "}
                {selectedMovie?.network?.name || "N/A"}{" "}
              </p>{" "}
              <p>
                {" "}
                📌 <strong>Status:</strong>{" "}
                {selectedMovie?.status || "N/A"}{" "}
              </p>{" "}
            </div>{" "}
            <div className="mt-5">
              {" "}
              <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                {" "}
                Overview{" "}
              </h3>{" "}
              <div
                className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7"
                dangerouslySetInnerHTML={{
                  __html:
                    selectedMovie?.summary || "<p>No summary available.</p>",
                }}
              />{" "}
            </div>{" "}
            <div className="mt-6 flex justify-end">
              {" "}
              <button
                onClick={onClose}
                className="w-full cursor-pointer rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetailsModal;
