import { MenuIcon, XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const links = [
    { name: "Feed", to: "/dash" },
    { name: "Profile", to: "/dash/profile" },
    { name: "Connections", to: "/dash/connections" },
    { name: "Requests", to: "/dash/requests" },
  ];

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "logout",
        {},
        {
          withCredentials: true,
        },
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.log("Error : " + err.message);
    }
  };

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <Link to={"/dash"}>
          <img
            src="/assets/logo.png"
            alt="logo"
            className="h-8.5 w-auto"
            width={205}
            height={48}
          />
        </Link>

        <div className="hidden items-center space-x-10 md:flex">
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.name}
              className="transition hover:text-gray-300"
            >
              {link.name}
            </Link>
          ))}

          <button onClick={handleLogout} className="btn glass">
            Logout
          </button>
        </div>
      </motion.nav>
    </>
  );
}
