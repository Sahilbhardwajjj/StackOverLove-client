import SectionTitle from "../components/section-title";
import { CheckIcon, CrownIcon, RocketIcon, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
  const ref = useRef([]);
  const data = [
    {
      icon: RocketIcon,
      title: "Community",
      description: "For solo devs and open-source lovers",
      price: "Free",
      buttonText: "Initialize Account",
      features: [
        "Unlimited profile browsing",
        "GitHub stack verification",
        "Up to 5 active connections",
        "Basic algorithmic matching",
        "Public repo visibility",
        "Community support access",
      ],
    },
  ];

  return (
    <section className="mt-32" id="pricing">
      <SectionTitle
        title="Our Pricing Plans"
        description="A visual collection of our most recent works - each piece crafted with intention, emotion and style."
      />

      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="group w-full max-w-80 glass p-6 rounded-xl hover:-translate-y-0.5"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: `${index * 0.15}`,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
            ref={(el) => (ref.current[index] = el)}
            onAnimationComplete={() => {
              const card = ref.current[index];
              if (card) {
                card.classList.add("transition", "duration-300");
              }
            }}
          >
            <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
              <item.icon className="size-3.5" />
              <span>{item.title}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold">
              {item.price} <span className="text-sm font-normal">/month</span>
            </h3>
            <p className="text-gray-200 mt-3">{item.description}</p>
            <button
              className={`mt-7 rounded-md w-full btn ${item.mostPopular ? "bg-white text-gray-800" : "glass"}`}
            >
              {item.buttonText}
            </button>
            <div className="mt-6 flex flex-col">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 py-2">
                  <div className="rounded-full glass border-0 p-1">
                    <CheckIcon className="size-3 text-white" strokeWidth={3} />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
