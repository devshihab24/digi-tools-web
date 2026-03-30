import React from "react";
import PricingCard from "./PricingCard";

const SimplePricing = () => {
  const pricingPlans = [
    {
      id: 1,
      cardType: "Starter",
      shortDescription: "Perfect for getting started",
      pricingPerMonth: "$0",
      popular: false,
      advantages: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      purchaseTypeBtn: "Get Started",
    },
    {
      id: 2,
      cardType: "Pro",
      shortDescription: "Best for professionals",
      popular: "Most Popular",
      pricingPerMonth: "$29",
      advantages: [
        "Access to all premium tools",
        "Up to 5 users",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Advanced analytics",
      ],
      purchaseTypeBtn: "Start Pro Trial",
    },
    {
      id: 3,
      cardType: "Enterprise",
      shortDescription: "For teams and businesses",
      pricingPerMonth: "$99",
      popular: false,
      advantages: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            pricingPlans.map(plan=><PricingCard plan={plan} key={plan.id}></PricingCard>)
        }
        </div>
    </div>
  );
};

export default SimplePricing;
