import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { LandingPage } from "./components/pages/LandingPage";
export default function App() {
  const location = useLocation();
  const showLandingPage = location.pathname === "/";
  return (
    <div>
      <Navbar />
      {showLandingPage && <LandingPage />}
      <Outlet />
      <Footer />
    </div>
  );
}
