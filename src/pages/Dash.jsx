import LenisScroll from "../components/lenis-scroll";
import DashNavbar from "../components/DashNavbar";
import Footer from "../components/footer";
import Bgcolor from "../components/Bgcolor";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div>
      <LenisScroll />
      <DashNavbar />
      <Bgcolor />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dash;
