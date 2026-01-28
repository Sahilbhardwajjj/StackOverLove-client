import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addUser } from "../store/userSlice";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    role: user?.role || "",
    bio: user?.bio || "",
    skills: user?.skills || "",
    age: user?.age || "",
    photoUrl: user?.photoUrl || "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.BASE_URL + "profile/edit",
        formData,
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res?.data?.data));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Edit Profile</h1>
        <p className="text-gray-400 text-sm">
          Update your information and see your changes in real-time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form Section */}
        <div className="p-8 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-md h-fit">
          <form onSubmit={handleEdit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                First Name
              </label>
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
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Last Name
              </label>
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Age
              </label>
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
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Role
              </label>
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
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Developer, Designer"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                />
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Skills
              </label>
              <div className="flex items-start w-full bg-black/50 border border-blue-500/30 rounded-2xl overflow-hidden pl-6 pt-4 hover:border-blue-500/50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-blue-400 mt-1 flex-shrink-0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                </svg>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none p-2 resize-none"
                  rows="3"
                />
              </div>
              <p className="text-gray-500 text-xs mt-2">
                Separate multiple skills with commas
              </p>
            </div>

            {/* Bio */}
            <div>
              <label className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Bio
              </label>
              <div className="flex items-start w-full bg-black/50 border border-blue-500/30 rounded-2xl overflow-hidden pl-6 pt-4 hover:border-blue-500/50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-blue-400 mt-1 flex-shrink-0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none p-2 resize-none"
                  rows="4"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                Photo URL
              </label>
              <div className="flex items-center w-full bg-black/50 border border-purple-500/30 h-12 rounded-full overflow-hidden pl-6 gap-2 hover:border-purple-500/50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-purple-400"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <input
                  type="url"
                  name="photoUrl"
                  value={formData.photoUrl}
                  onChange={handleChange}
                  placeholder="Enter photo URL"
                  className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 border border-red-500/30 rounded-xl bg-red-500/10">
                <p className="text-red-400 text-sm font-medium">✕ {error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="p-4 border border-emerald-500/30 rounded-xl bg-emerald-500/10">
                <p className="text-emerald-400 text-sm font-medium">
                  ✓ Profile updated successfully!
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold hover:from-blue-500 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 transition-all uppercase text-xs tracking-widest mt-8"
            >
              {loading ? "Saving..." : "Save Profile"}
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="flex flex-col items-center justify-start sticky top-24 h-fit">
          <div className="w-full max-w-sm mx-auto">
            <h2 className="text-pink-400 text-xs font-bold uppercase tracking-widest mb-6 text-center">
              Live Preview
            </h2>
            <div className="h-fit">
              <UserCard
                user={{
                  firstName: formData.firstName,
                  lastName: formData.lastName,
                  age: formData.age,
                  role: formData.role,
                  bio: formData.bio,
                  skills: formData.skills,
                  photoUrl: formData.photoUrl,
                  _id: "preview",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
