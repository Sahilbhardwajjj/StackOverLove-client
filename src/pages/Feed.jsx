import axios from "axios";
import { useEffect, useCallback } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../store/feedSlice";
import UserCard from "../components/UserCard";
import Bgcolor from "../components/Bgcolor";

const Feed = () => {
  const dispatch = useDispatch();

  const feed = useSelector((store) => store.feed);
  const users = feed?.data;

  const getFeed = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + "user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.error("Feed Error:", err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!users || users.length === 0) {
      getFeed();
    }
  }, [users, getFeed]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12">
      <Bgcolor />

      <div className="z-10 w-full max-w-sm">
        {users && users.length > 0 ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <UserCard key={users[0]._id} user={users[0]} />
            <p className="text-gray-400 text-center text-xs mt-8 tracking-widest uppercase font-medium">
              {users.length - 1} more profile{users.length - 1 !== 1 ? "s" : ""}{" "}
              in queue
            </p>
          </div>
        ) : (
          <div className="text-center p-8 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-md">
            <h1 className="text-2xl font-bold text-white mb-2">
              Feed Finished
            </h1>
            <p className="text-gray-400 text-sm mb-6">
              You've seen everyone for now. Check back later!
            </p>
            <button
              onClick={getFeed}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold hover:from-blue-500 hover:to-emerald-500 shadow-lg shadow-blue-500/20 transition-all uppercase text-xs tracking-widest"
            >
              Refresh Feed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
