import axios from "axios";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../store/feedSlice";

const UserCard = ({ user }) => {
  const { photoUrl, firstName, lastName, age, bio, role, skills, _id } = user;
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [swipeAction, setSwipeAction] = useState(null);
  const cardRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startY.current = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const diffX = e.clientX - startX.current;
    const diffY = e.clientY - startY.current;

    setPosition({ x: diffX, y: diffY });
    setRotation(diffX * 0.1);

    if (diffX > 50) {
      setSwipeAction("interested");
    } else if (diffX < -50) {
      setSwipeAction("ignored");
    } else {
      setSwipeAction(null);
    }
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diffX = e.clientX - startX.current;

    if (Math.abs(diffX) > 100) {
      const action = diffX > 0 ? "interested" : "ignored";
      handleSend(action, _id);
      setPosition({ x: diffX > 0 ? 500 : -500, y: 0 });
      setOpacity(0);
      setRotation(diffX > 0 ? 20 : -20);
    } else {
      setPosition({ x: 0, y: 0 });
      setRotation(0);
      setSwipeAction(null);
    }
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const diffX = e.touches[0].clientX - startX.current;
    const diffY = e.touches[0].clientY - startY.current;

    setPosition({ x: diffX, y: diffY });
    setRotation(diffX * 0.1);

    if (diffX > 50) {
      setSwipeAction("interested");
    } else if (diffX < -50) {
      setSwipeAction("ignored");
    } else {
      setSwipeAction(null);
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diffX = e.changedTouches[0].clientX - startX.current;

    if (Math.abs(diffX) > 100) {
      const action = diffX > 0 ? "interested" : "ignored";
      handleSend(action, _id);
      setPosition({ x: diffX > 0 ? 500 : -500, y: 0 });
      setOpacity(0);
      setRotation(diffX > 0 ? 20 : -20);
    } else {
      setPosition({ x: 0, y: 0 });
      setRotation(0);
      setSwipeAction(null);
    }
  };

  const handleSend = async (status, userId) => {
    try {
      await axios.post(
        import.meta.env.BASE_URL + "request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="relative w-full max-w-sm h-screen flex items-center justify-center perspective">
      <div
        ref={cardRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative w-full max-w-sm cursor-grab active:cursor-grabbing select-none"
        style={{
          transform: `translateX(${position.x}px) translateY(${position.y}px) rotate(${rotation}deg)`,
          opacity: opacity,
          transition: isDragging.current ? "none" : "all 0.3s ease-out",
        }}
      >
        {/* Swipe Indicators */}
        {swipeAction === "interested" && (
          <div className="absolute top-10 left-10 z-50">
            <div className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-bold text-lg uppercase tracking-widest shadow-lg">
              ✓ Interested
            </div>
          </div>
        )}
        {swipeAction === "ignored" && (
          <div className="absolute top-10 right-10 z-50">
            <div className="px-6 py-3 bg-pink-500 rounded-full text-white font-bold text-lg uppercase tracking-widest shadow-lg">
              ✕ Ignore
            </div>
          </div>
        )}

        <div className="flex flex-col w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Image Section */}
          <div className="relative h-[520px] w-full bg-black">
            <img
              src={
                photoUrl ||
                import.meta.env.DEFAULT_PHOTO_URL ||
                "https://i.pinimg.com/736x/7d/93/ab/7d93ab87452ba3d71249c024747a4d56.jpg"
              }
              alt={`${firstName}'s profile`}
              className="h-full w-full object-cover object-top"
              draggable="false"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Top Info Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md border border-blue-400/30 rounded-full">
              <p className="text-blue-400 font-bold text-sm">
                {role || "Explorer"}
              </p>
            </div>

            {/* Name and Age Overlay */}
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <div className="flex items-baseline gap-3">
                <h2 className="text-4xl font-black text-white tracking-tight drop-shadow-lg">
                  {firstName} {lastName}
                </h2>
                <span className="text-2xl text-gray-200 font-bold drop-shadow-lg">
                  {age}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 space-y-4 flex-1">
            {bio && (
              <div className="space-y-2">
                <p className="text-gray-300 text-sm leading-relaxed italic line-clamp-2">
                  "{bio}"
                </p>
              </div>
            )}

            {skills && (Array.isArray(skills) ? skills.length > 0 : skills) && (
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {(typeof skills === "string" ? skills.split(",") : skills)
                    .slice(0, 5)
                    .map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/15 border border-blue-400/40 text-blue-300 text-xs font-medium rounded-full hover:bg-blue-500/25 transition"
                      >
                        {typeof skill === "string" ? skill.trim() : skill}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="px-6 pb-6 text-center text-xs text-gray-500 tracking-widest uppercase">
            ← Swipe left to pass • Swipe right to like →
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
