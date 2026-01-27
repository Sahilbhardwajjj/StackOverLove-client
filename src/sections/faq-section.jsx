import SectionTitle from "../components/section-title";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FaqSection() {
  const [isOpen, setIsOpen] = useState(false);
  const data = [
    {
      question: "Do I need a GitHub account to join?",
      answer:
        "While not mandatory, syncing your GitHub is the fastest way to verify your stack and find high-fidelity matches based on your actual code.",
    },
    {
      question: "Is StackOverLove only for professional developers?",
      answer:
        "It is for everyone who codes—from students and hobbyists to CTOs. If you speak a programming language, you belong here.",
    },
    {
      question: "How does the matching algorithm work?",
      answer:
        "Our engine analyzes your technical metadata, indentation preferences, and shared repo interests to suggest compatible partners.",
    },
    {
      question: "Can I filter matches by specific tech stacks?",
      answer:
        "Not Now, As we are still in development phase but soon it will be added",
    },
    {
      question: "Is my private repository data secure?",
      answer:
        "We only access public metadata to build your profile. Your private code remains strictly confidential and is never stored on our servers.",
    },
    {
      question: "Can I try StackOverLove for free?",
      answer:
        "Absolutely. You can initialize your account, build your profile, and start connecting today—no credit card required.",
    },
  ];

  return (
    <section className="mt-32" id="faqs">
      <SectionTitle
        title="FAQ's"
        description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find."
      />
      <div className="mx-auto mt-12 space-y-4 w-full max-w-xl">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col glass rounded-md"
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
          >
            <h3
              className="flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium"
              onClick={() => setIsOpen(isOpen === index ? null : index)}
            >
              {item.question}
              <ChevronDownIcon
                className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? "rotate-180" : ""}`}
              />
            </h3>
            <p
              className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? "pt-2 pb-4 max-h-80" : "max-h-0"}`}
            >
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
