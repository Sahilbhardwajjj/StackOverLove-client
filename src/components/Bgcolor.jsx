import React from "react";

const Bgcolor = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
      <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
      <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
      <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
    </div>
  );
};

export default Bgcolor;
