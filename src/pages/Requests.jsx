import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../store/requestSlice";
import RequestCard from "../components/RequestCard";
import Bgcolor from "../components/Bgcolor";

const Requests = () => {
  const reqs = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + "user/requests", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      console.error("Requests Error:", err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!reqs || reqs.length === 0) {
      fetchRequests();
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full py-12 px-4">
      <Bgcolor />
      <div className="z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Connection Requests
          </h1>
          <p className="text-gray-400 text-sm">
            {reqs?.length || 0} request{reqs?.length !== 1 ? "s" : ""} waiting
            for your response
          </p>
        </div>

        {reqs && reqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reqs.map((req) => (
              <RequestCard key={req._id} request={req} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-2">
              No Requests Yet
            </h2>
            <p className="text-gray-400">
              You'll see connection requests here when people show interest in
              connecting!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Requests;
