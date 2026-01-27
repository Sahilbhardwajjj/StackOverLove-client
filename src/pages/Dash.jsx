import LenisScroll from "../components/lenis-scroll";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Bgcolor from "../components/Bgcolor";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div>
      <LenisScroll />
      <Navbar />
      <Bgcolor />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dash;
