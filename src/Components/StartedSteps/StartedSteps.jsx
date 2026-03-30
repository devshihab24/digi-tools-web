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
      <div className="w-[95%] md:w-[80%] mx-auto py-10 space-y-10">
        <div className=" flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl md:text-5xl font-black">
            Get Started in 3 Steps
          </h2>
          <p className="text-center">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <StartedStepCard item={item} key={item.index}></StartedStepCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartedSteps;
