import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
//   const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

    return (
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        {/* Error Image */}
        <div className="max-w-screen-sm">
          <figure className="mb-8">
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page not found"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </figure>
        </div>

        {/* Error Text */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Page not found.
          </h1>
          <p className="text-gray-600 mb-8">
            The page you were looking for could not be found.
          </p>

          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </section>
    );

};
export default ErrorPage 