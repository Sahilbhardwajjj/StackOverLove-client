import React, { useState } from "react";
import Bgcolor from "../components/Bgcolor";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating account with:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Bgcolor />
      <div>
        <form
          onSubmit={handleSubmit}
          className="sm:w-87.5 w-full text-center hover:-translate-y-0.5 p-6 border border-purple-500/30 rounded-2xl px-8 bg-black/40 backdrop-blur-sm"
        >
          <h1 className="text-white text-3xl mt-10 font-medium">Sign up</h1>

          <p className="text-gray-400 text-sm mt-2">
            Please sign up to continue
          </p>

          <div className="flex items-center mt-6 w-full bg-black/50 border border-pink-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-pink-500/50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-pink-400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center w-full mt-4 bg-black/50 border border-blue-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-blue-500/50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-blue-400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-black/50 border border-orange-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-orange-500/50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-orange-400"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 transition font-medium"
          >
            Sign up
          </button>

          <p className="text-gray-400 text-sm mt-3 mb-11">
            Already have an account?
            <Link
              to={"/login"}
              className="text-blue-400 hover:text-blue-300 hover:underline ml-1 cursor-pointer transition"
            >
              click here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
