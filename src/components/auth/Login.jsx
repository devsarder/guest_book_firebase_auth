import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login_image from "../../assets/images/login_img.png";
import {
  loginUser,
  onFaceBookLogin,
  onGoogleLogin,
} from "../firebase_auth/firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const signedInUser = await loginUser(email, password);
      setMessage("You Are Successfully Logged In.");
      Swal.fire(`Hello ${signedInUser.email}, welcome back!`);
      navigate("/home");
    } catch (err) {
      setMessage(`Login failed: ${err.message}`);
    }
  };

  const handSocialLogin = async (social) => {
    setMessage("Login with Email feature is not yet implemented.");
    let signedUser;
    if (social === "email") {
      const user = await onGoogleLogin();
      signedUser = user;
    } else if (social === "facebook") {
      const user = await onFaceBookLogin();
      signedUser = user;
    }
    if (signedUser !== undefined) {
      navigate("/home");
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md w-full max-w-4xl">
        {/* Login Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Login
          </h2>
          {/* {message && <p className="text-sm text-red-500 mb-4">{message}</p>} */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Buttons */}
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-yellow-500"
              >
                Login
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => handSocialLogin("email")}
                  className="w-full py-2 px-4 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 "
                >
                  Login with Email
                </button>
                <button
                  onClick={() => handSocialLogin("facebook")}
                  className="w-full py-2 px-4 bg-facebook text-white rounded-md shadow-sm hover:bg-teal-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 "
                >
                  Login with Facebook
                </button>
              </div>
            </div>
          </form>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <NavLink to="/register" className="text-indigo-600 hover:underline">
              Register here
            </NavLink>
          </p>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Forgot your password?{" "}
            <NavLink to="/reset" className="text-indigo-600 hover:underline">
              Reset it here
            </NavLink>
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={login_image}
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};
