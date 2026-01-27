import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef([]);
  const data = [
    {
      review:
        "Finding someone who actually understands the difference between a join and a union in real life is a game-changer. This isn't just a dating app; it’s a high-fidelity matching engine.",
      name: "Richard Nelson",
      about: "Full-Stack Engineer",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      review:
        "Clean, elegant, and 100% bug-free. Bonding over dark mode was the ultimate icebreaker.",
      name: "Sophia Martinez",
      about: "Frontend Architect",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      review:
        "Finally skipped the small talk. We bonded over our side projects before the first coffee.",
      name: "Ethan Roberts",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "A high-fidelity matching engine. Found a partner who finally understands my git flow",
      name: "Isabella Kim",
      about: "Founder & CEO",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    },
    {
      review:
        "Zero-latency chemistry. The only platform where my production schedule isn't a deal-breaker.",
      name: "Liam Johnson",
      about: "DevOps Lead",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    },
    {
      review:
        "No bots, just authenticated connections. It’s the most secure repo for my heart.",
      name: "Ava Patel",
      about: "Security Researcher",
      rating: 5,
      image:
        "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png",
    },
  ];
  return (
    <section className="mt-32 flex flex-col items-center" id="testimonials">
      <SectionTitle
        title="From Dev to Production: Verified Matches"
        description="Hear from the developers who successfully merged their lives."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1"
            initial={{ y: 150, opacity: 0 }}
            ref={(el) => (ref.current[index] = el)}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
            onAnimationComplete={() => {
              const card = ref.current[index];
              if (card) {
                card.classList.add("transition", "duration-300");
              }
            }}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">{item.about}</p>
              <img
                className="size-10 rounded-full"
                src={item.image}
                alt={item.name}
              />
            </div>
            <p className="line-clamp-3">“{item.review}”</p>
            <p className="text-gray-300">- {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
