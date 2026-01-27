import React, { useState } from "react";
import Bgcolor from "../components/Bgcolor";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    email: "",
    password: "",
    role: "",
    bio: "",
    skills: "",
    age: "",
    photoUrl: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "signup",
        {
          username: formData.username,
          firstName: formData.firstName,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          bio: formData.bio,
          skills: formData.skills,
          age: formData.age,
          photoUrl: formData.photoUrl,
        },
        { withCredentials: true },
      );
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-8 px-4">
      <Bgcolor />
      <div className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="text-center p-8 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-sm"
        >
          <h1 className="text-white text-3xl font-medium">Sign up</h1>
          <p className="text-gray-400 text-sm mt-2 mb-8">Create your account</p>

          {/* SECTION 1: Basic Info */}
          <div className="mb-8">
            <h2 className="text-pink-400 text-xs uppercase tracking-widest font-bold text-left mb-4">
              Basic Information
            </h2>

            <div className="flex items-center w-full bg-black/50 border border-pink-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-pink-500/50 transition">
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
                name="firstName"
                placeholder="First Name"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center w-full mt-4 bg-black/50 border border-pink-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-pink-500/50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-pink-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
              </svg>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.username}
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
                placeholder="Email"
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

            <div className="flex items-center mt-4 w-full bg-black/50 border border-purple-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-purple-500/50 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-purple-400"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* SECTION 2: Professional Info */}
          <div className="mb-8">
            <h2 className="text-blue-400 text-xs uppercase tracking-widest font-bold text-left mb-4">
              Professional
            </h2>

            <div className="flex items-center w-full bg-black/50 border border-blue-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-blue-500/50 transition">
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
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <input
                type="text"
                name="role"
                placeholder="Your Role (e.g. Developer)"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.role}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center mt-4 w-full bg-black/50 border border-blue-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-blue-500/50 transition">
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
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <input
                type="text"
                name="skills"
                placeholder="Skills (React, Node, etc.)"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center mt-4 w-full bg-black/50 border border-blue-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-blue-500/50 transition">
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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <input
                type="url"
                name="photoUrl"
                placeholder="Photo URL"
                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                value={formData.photoUrl}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* SECTION 3: Bio */}
          <div className="mb-8">
            <h2 className="text-orange-400 text-xs uppercase tracking-widest font-bold text-left mb-4">
              About You
            </h2>

            <div className="w-full bg-black/50 border border-orange-500/30 rounded-3xl overflow-hidden p-4 hover:border-orange-500/50 transition">
              <textarea
                name="bio"
                placeholder="Tell us about yourself..."
                className="w-full bg-transparent text-white placeholder-gray-500 outline-none resize-none h-20"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-400 bg-red-900/20 border border-red-500/50 rounded-xl">
              ⚠️ {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-11 rounded-full text-white bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 transition font-medium"
          >
            Sign up
          </button>

          <p className="text-gray-400 text-sm mt-6 mb-4">
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
