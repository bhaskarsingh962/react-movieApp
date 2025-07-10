/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const {
    Actors,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    imdbRating,
    Awards,
    Language,
  } = movieData;

  // 192min
  const totalMinutes = Runtime.replace("min", "");
  const hours = Math.floor(totalMinutes / 60); // Calculate the number of hours
  const minutes = totalMinutes % 60; // Calculate the remaining minutes

  const formattedTime = `${hours}hr ${minutes}min`;

  return (
    <li className="flex justify-center items-center bg-gray-900 min-h-screen p-8">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 md:w-4/5 lg:w-2/3 space-y-6">
        <figure className="flex flex-col md:flex-row md:items-start">
          <div className="md:w-2/5 mb-4 md:mb-0 w-full">
            <img
              src={Poster}
              alt={Title}
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-2/3 md:ml-6 space-y-4">
            <h1 className="text-4xl font-bold mb-2">{Title}</h1>
            <div className="flex space-x-3">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                {`#${Type}`}
              </span>
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                Year: {Year}
              </span>
            </div>
            <p className="text-lg">{Plot}</p>
            <p className="italic">Awards: {Awards}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <p className="flex items-center">
                <i className="fas fa-camera-retro text-red-500 mr-2"></i>
                Rating: {imdbRating}
              </p>
              <p className="flex items-center">
                <i className="fas fa-clock text-gray-400 mr-2"></i>
                {formattedTime}
              </p>
              <p className="flex items-center">
                <i className="fas fa-file-invoice-dollar text-yellow-400 mr-2"></i>
                {BoxOffice}
              </p>
              <p className="flex items-center">
                <i className="fas fa-globe text-green-500 mr-2"></i>
                Language: {Language}
              </p>
            </div>

            {/* Actors Section */}
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Actors</h2>
              <div className="flex flex-wrap gap-2">
                {Actors.split(',').map((actor, index) => (
                  <span
                    key={index}
                    className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {actor.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Genre Section */}
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">Genre</h2>
              <div className="flex flex-wrap gap-2">
                {Genre.split(',').map((genre, index) => (
                  <span
                    key={index}
                    className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {genre.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-start mt-6">
              <NavLink
                to="/movies"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
              >
                Go Back
              </NavLink>
            </div>
          </div>
        </figure>
      </div>
    </li>
  );
};

export default MovieDetails;
