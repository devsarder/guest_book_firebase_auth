import { Link, useLocation } from "react-router-dom";

export const ErrorPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for{" "}
          <span className="text-indigo-600 font-semibold underline">
            {location.pathname}
          </span>{" "}
          doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
