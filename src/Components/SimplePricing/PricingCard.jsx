import {  CircleCheck } from "lucide-react";
import React from "react";

const PricingCard = ({ plan }) => {
  const {
    cardType,
    purchaseTypeBtn,
    advantages,
    pricingPerMonth,
    shortDescription,
    popular
  } = plan;
  return (
    <div className={`relative p-5 space-y-5 rounded-xl card-shadow ${popular ? 'text-white bg-linear-to-r from-[#4F39F7] to-[#9b4d99]' : ''}`}>
        {
            popular ? <div className="absolute -top-3 left-[50%] translate-x-[-50%] bg-[#FEF6C3] text-[#BB4D00] text-sm px-3 py-1 rounded-full">{popular}</div> : ""
        }
      <div>
        <h4 className="text-xl font-semibold">{cardType}</h4>
        <p className={`${popular ? 'pricing' : ''} `}>{shortDescription}</p>
      </div>
      <p className={`${popular ? 'pricing' : ''} `}>
        <span className={`text-3xl font-bold ${popular ? 'text-white' : 'text-black'} `}>{pricingPerMonth}</span>/Month
      </p>
      <ul>
        {
            advantages.map(text => <li className={`flex items-center gap-1 ${popular ? 'text-white' : 'text-gray-600'}`}><CircleCheck className={`${popular? 'text-white' : 'text-green-500'}`} size={16}></CircleCheck>{text}</li>)
        }
      </ul>
      <button className={`w-full ${popular ? 'pricing-btn' : 'common-btn'} `}>{purchaseTypeBtn}</button>
    </div>
  );
};

export default PricingCard;
