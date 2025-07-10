import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */

const Card = ({ movie }) => {
  const { Poster, imdbID, Title } = movie;

  return (
    <li className="relative flex flex-col items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl w-64 h-96 text-white">
      {/* Poster Image with Enhanced 3D Floating effect */}
      <div className="relative -mt-12 w-52 h-72 rounded-lg shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl">
        <img
          src={Poster}
          className="w-full h-full object-cover rounded-lg border-4 border-gray-700"
          alt={imdbID}
        />
      </div>

      {/* Card Content */}
      <div className="mt-4 text-center px-6">
        <h3 className="text-xl font-semibold text-gray-100 hover:text-green-400 transition duration-300">
          {Title}
        </h3>

        <div className="mt-6 w-full">
          <NavLink to={`/movies/${imdbID}`} className="w-full">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 w-full rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
              Watch Now
            </button>
          </NavLink>
        </div>
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border border-gray-700 rounded-lg pointer-events-none transform transition-all duration-500 ease-in-out hover:border-green-400 hover:shadow-lg hover:shadow-green-400"></div>
    </li>
  );
};

export default Card;
