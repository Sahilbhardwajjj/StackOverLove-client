import React, { useEffect, useCallback } from "react";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionSlice";
import ConnectionCard from "../components/ConnectionCard";
import Bgcolor from "../components/Bgcolor";

const Connections = () => {
  const connectionsFromStore = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = useCallback(async () => {
    try {
      const res = await axios.get(
        import.meta.env.BASE_URL + "user/connections",
        {
          withCredentials: true,
        },
      );
      dispatch(addConnections(res?.data?.data));
    } catch (err) {
      console.error("Connections Error:", err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!connectionsFromStore || connectionsFromStore.length === 0) {
      fetchConnections();
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full py-12 px-4">
      <Bgcolor />
      <div className="z-10 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Your Connections
          </h1>
          <p className="text-gray-400 text-sm">
            {connectionsFromStore?.length || 0} connection
            {connectionsFromStore?.length !== 1 ? "s" : ""}
          </p>
        </div>

        {connectionsFromStore && connectionsFromStore.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectionsFromStore.map((connection) => (
              <ConnectionCard key={connection?._id} connection={connection} />
            ))}
          </div>
        ) : (
          <div className="text-center p-12 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white mb-2">
              No Connections Yet
            </h2>
            <p className="text-gray-400">
              Start by exploring the feed to make connections!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Connections;
