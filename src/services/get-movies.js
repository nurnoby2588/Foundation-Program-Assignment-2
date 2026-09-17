const baseUrl = "https://api.tvmaze.com";
export const fetchMovies = async () => {
  const endPoint = "/shows";
  const res = await fetch(baseUrl + endPoint);
  const data = await res.json();
  return data;
};

export const searchMovie = async (query) => {
  if (!query) return;
  const endPoint = "/search/shows?q=";
  const res = await fetch(`${baseUrl}${endPoint}${query}`);
  const data = await res.json();
  return data?.map((movies)=>movies.show);
};
