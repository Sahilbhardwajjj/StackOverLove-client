import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <motion.div
        className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
        <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
      </motion.div>
      <motion.section className="flex flex-col items-center">
        <motion.div
          className="flex items-center gap-3 mt-32"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          <p>Smart, Fast, Always Active.</p>
          <button className="btn glass py-1 px-3 text-xs">Let's Connect</button>
        </motion.div>
        <motion.h1
          className="text-center text-4xl/13 md:text-6xl/19 mt-4 font-semibold tracking-tight max-w-3xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 70,
            mass: 1,
          }}
        >
          Code. Connect. Commit.
        </motion.h1>
        <motion.p
          className="text-center text-gray-100 text-base/7 max-w-2xl mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          The first developer-only ecosystem for high-fidelity connections.
          Built for those who value clean code, low-latency chemistry, and
          meaningful commits.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 70,
            mass: 1,
          }}
        >
          <button className="btn max-md:w-full glass py-3">Get Started</button>
        </motion.div>
      </motion.section>
    </>
  );
}
