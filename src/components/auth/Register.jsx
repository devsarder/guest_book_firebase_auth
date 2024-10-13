import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import register_img from "../../assets/images/register.png";
import { registerWithEmailAndPassword } from "../firebase_auth/firebase";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await registerWithEmailAndPassword(
        formData.email,
        formData.password
      );
      console.log(userCredential);
      if (userCredential) {
        navigate("/login");
      }
      return userCredential;
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md transition-all duration-300 w-full max-w-4xl">
        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:text-yellow-500"
              >
                Register
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Already registered?{" "}
            <NavLink to="/login" className="text-indigo-600 hover:underline">
              Click here to sign in
            </NavLink>
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={register_img}
            alt="Register Illustration"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};
