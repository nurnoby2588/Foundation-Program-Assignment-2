
import { NavLink } from "react-router";
const Hero = () => {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60">

        <div className=" flex min-h-[90vh] flex-col  justify-center items-center text-center px-4 text-white">
          <div>
            <p className="text-4xl font-extrabold sm:text-5xl lg:text-6xl ">
              Explore Movies
            </p>
            <p className="mt-5 max-w-2xl">
              Find popular movies, discover new releases, and choose your next
              movie to watch.
            </p>
          </div>
          <div>
            <NavLink
              to="/movies"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Movies
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
