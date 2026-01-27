import React from "react";
import HeroSection from "../sections/hero-section";
import Features from "../sections/features";
import WorkflowSteps from "../sections/workflow-steps";
import Testimonials from "../sections/testimonials";
import FaqSection from "../sections/faq-section";
import PricingPlans from "../sections/pricing-plans";
import CallToAction from "../sections/call-to-action";

const Sections = () => {
  return (
    <div>
      <HeroSection />
      <Features />
      <WorkflowSteps />
      <Testimonials />
      <FaqSection />
      <PricingPlans />
      <CallToAction />
    </div>
  );
};

export default Sections;
