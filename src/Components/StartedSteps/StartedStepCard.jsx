import React from "react";

const StartedStepCard = ({ item }) => {
  return (
    <div className=" bg-white p-10 rounded-2xl card-shadow space-y-3">
      <div className="flex justify-end items-center ">
        <div className="flex justify-center items-center text-white h-8 w-8 rounded-full bg-linear-to-r from-[#4F39F7] to-[#700fde]">
          {item.index}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="bg-gray-100 p-8 rounded-full">
          <img className="h-16 w-16" src={item.img} alt="" />
        </div>
        <h3 className="text-3xl font-bold">{item.actionType}</h3>
        <p className="text-center">{item.description}</p>
      </div>
    </div>
  );
};

export default StartedStepCard;
