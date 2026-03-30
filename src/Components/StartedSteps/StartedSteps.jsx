import React from "react";
import StartedStepCard from "./StartedStepCard";

const StartedSteps = () => {
  const data = [
    {
      index: "01",
      img: "https://i.ibb.co.com/qL83LmYT/user.png",
      actionType: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      index: "02",
      img: "https://i.ibb.co.com/SFxQ5cV/package.png",
      actionType: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      index: "03",
      img: "https://i.ibb.co.com/TMz4GR21/rocket.png",
      actionType: "Start Creating",
      description: "Download and start using your premium tools immediately.",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="w-[95%] md:w-[80%] mx-auto flex flex-col justify-center items-center gap-2 py-10">
        <h2 className="text-5xl font-black">Get Started in 3 Steps</h2>
        <p>Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.map((item) => (
            <StartedStepCard item={item} key={item.index}></StartedStepCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartedSteps;
