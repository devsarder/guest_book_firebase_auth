import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handlePasswordReset } from "../firebase_auth/firebase";

export const Reset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await handlePasswordReset(email);
      setMessage("Password reset email sent successfully.");
      setTimeout(() => {
        navigate("/login"); // Redirect to login page after 3 seconds
      }, 3000);
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md transition-all duration-300  hover:scale-105 hover:shadow-sm hover:shadow-indigo-500">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Reset Password
        </h2>

        {message && <p className="text-sm text-green-500 mb-4">{message}</p>}
        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <form onSubmit={onFormSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-yellow-500"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Optional: Link to Login page */}
        <p className="mt-4 text-sm text-gray-600 text-center">
          Remembered your password?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};
