import React from "react";
import PricingCard from "./PricingCard";

const SimplePricing = () => {
  const pricingPlans = [
    {
      id: 1,
      cardType: "Starter",
      shortDescription: "Best for individuals getting started.",
      pricingPerMonth: "$9",
      popular: false,
      advantages: [
        "Access to basic features",
        "Single user support",
        "Limited storage (5GB)",
        "Email support",
      ],
      purchaseTypeBtn: "Get Started",
    },
    {
      id: 2,
      cardType: "Pro",
      shortDescription: "Perfect for growing teams.",
      popular: "Most Popular",
      pricingPerMonth: "$29",
      advantages: [
        "All Starter features",
        "Up to 5 users",
        "Increased storage (50GB)",
        "Priority email support",
        "Team collaboration tools",
        "Basic analytics dashboard",
      ],
      purchaseTypeBtn: "Upgrade to Pro",
    },
    {
      id: 3,
      cardType: "Enterprise",
      shortDescription: "Advanced solution for large organizations.",
      pricingPerMonth: "$99",
      popular: false,
      advantages: [
        "All Pro features",
        "Unlimited users",
        "Unlimited storage",
        "24/7 dedicated support",
        "Advanced security features",
        "Custom integrations support",
      ],
      purchaseTypeBtn: "Contact Sales",
    },
  ];
  return (
    <div className="my-10 w-[95%] md:w-[80%] mx-auto">
      <div className="py-10 flex flex-col justify-center items-center gap-3 text-center">
        <h2 className="text-3xl md:text-5xl font-black">
          Simple, Transparent Pricing
        </h2>
        <p>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {
            pricingPlans.map(plan=><PricingCard plan={plan} key={plan.id}></PricingCard>)
        }
        </div>
    </div>
  );
};

export default SimplePricing;
