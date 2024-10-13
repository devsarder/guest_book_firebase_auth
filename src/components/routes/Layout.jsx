import Footer from "../Footer";
import Navbar from "../Navbar";
import { LandingPage } from "../pages/LandingPage";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
