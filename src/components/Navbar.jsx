import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { handleSignOut } from "./firebase_auth/firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onLogOut = () => {
    handleSignOut(navigate);
  };

  return (
    <nav className="bg-indigo-900 p-4">
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <Link to="/" className="text-white text-xl font-bold">
          GuestBook
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          {!user ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="block px-3 py-2 text-white hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block px-3 py-2 text-white hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/reset"
                  className="block px-3 py-2 text-white hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reset
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/home"
                  className="block px-3 py-2 text-white hover:text-yellow-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    onLogOut();
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-white hover:text-yellow-500"
                >
                  Log out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
