import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";
import Bgcolor from "../components/Bgcolor";

const Profile = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="relative min-h-screen w-full py-12 px-4">
      <Bgcolor />
      <div className="z-10 max-w-6xl mx-auto">
        {user ? (
          <EditProfile user={user} />
        ) : (
          <div className="text-center p-12 border border-purple-500/30 rounded-3xl bg-black/40 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-white">
              Loading Profile...
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
