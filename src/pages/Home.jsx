import LenisScroll from "../components/lenis-scroll";
import Navbar from "../components/navbar";
import Bgcolor from "../components/Bgcolor";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4">
      <LenisScroll />
      <Navbar />
      <Bgcolor />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Home;
