import { MenuIcon, XIcon } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Guide", href: "#guide" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ's", href: "#faqs" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <motion.nav
        className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <a href="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="h-8.5 w-auto"
            width={205}
            height={48}
          />
        </a>

        <div className="hidden items-center space-x-10 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login" className="btn glass">
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="transition active:scale-90 md:hidden"
        >
          <MenuIcon className="size-6.5" />
        </button>
      </motion.nav>
    </>
  );
}
