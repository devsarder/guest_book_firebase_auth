import { useNavigate } from "react-router-dom";
import WelcomeImage from "../../assets/images/Welcome-cuate.png"; // Make sure to update the path

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Change to the path where your login component is
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center">
        {/* Left Side - Welcome Message */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Guestbook!
          </h1>
          <p className="text-gray-600 mb-6">
            Share your thoughts, leave comments, and connect with others. Join
            us and be a part of our community.
          </p>
          <button
            onClick={handleLogin}
            className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get Started
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={WelcomeImage}
            alt="Welcome"
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};
