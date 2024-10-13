import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { handleSignOut } from "./firebase_auth/firebase";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    handleSignOut(navigate);
  };

  return (
    <nav className="bg-indigo-900 p-4">
      <ul className="flex space-x-6 w-[1100px] mx-auto justify-center">
        {!user ? (
          <>
            <li>
              <NavLink to="/login" className="text-white hover:text-yellow-500">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="text-white hover:text-yellow-500"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/reset" className="text-white hover:text-yellow-500">
                Reset
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/home" className="text-white hover:text-yellow-500">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={onLogOut}
                className="text-white hover:text-yellow-500"
              >
                Log out
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
