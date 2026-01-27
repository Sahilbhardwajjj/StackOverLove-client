import { DEFAULT_PHOTO_URL } from "../utils/constants";

const ConnectionCard = ({ connection }) => {
  if (!connection) return null;

  const { firstName, lastName, role, age, bio, photoUrl, skills, _id } =
    connection;

  return (
    <div className="group relative w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden shadow-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Image Section */}
      <div className="relative h-80 w-full bg-black overflow-hidden">
        <img
          src={photoUrl || DEFAULT_PHOTO_URL}
          alt={`${firstName}'s profile`}
          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Role Badge */}
        {role && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 border border-blue-400/40 rounded-full">
            <p className="text-blue-300 font-medium text-xs uppercase tracking-wider">
              {role}
            </p>
          </div>
        )}

        {/* Age Badge */}
        {age && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-pink-500/20 border border-pink-400/40 rounded-full">
            <p className="text-pink-300 font-medium text-xs">{age} years</p>
          </div>
        )}

        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-black text-white tracking-tight">
            {firstName} {lastName}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Bio */}
        {bio && (
          <div>
            <p className="text-gray-300 text-sm leading-relaxed italic line-clamp-2">
              "{bio}"
            </p>
          </div>
        )}

        {/* Skills */}
        {skills && (
          <div className="space-y-2">
            <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {(typeof skills === "string"
                ? skills.split(",")
                : Array.isArray(skills)
                  ? skills
                  : []
              )
                .slice(0, 4)
                .map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-500/15 border border-blue-400/40 text-blue-300 text-xs rounded-full"
                  >
                    {typeof skill === "string" ? skill.trim() : skill}
                  </span>
                ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 py-2 rounded-full border border-blue-500/50 text-blue-400 font-bold hover:bg-blue-500/10 active:scale-95 transition-all uppercase text-xs tracking-widest">
            Message
          </button>
          <button className="flex-1 py-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold hover:from-blue-500 hover:to-emerald-500 shadow-lg shadow-blue-500/20 active:scale-95 transition-all uppercase text-xs tracking-widest">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionCard;
