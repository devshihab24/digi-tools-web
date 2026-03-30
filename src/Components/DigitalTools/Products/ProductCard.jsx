import { CheckCircle, CircleCheck } from "lucide-react";
import React from "react";

const ProductCard = ({ products }) => {
  const {
    img,
    advantages,
    pricingPerMonth,
    shortDescription,
    title,
    badge,
    subscription,
  } = products;
  console.log(products);
  return (
    <div className="relative flex flex-col p-5 space-y-5 rounded-xl card-shadow">
      <div className="">
        <img className="h-12" src={img} alt="" />
        <div className={`absolute top-3 right-5 py-1 px-3 text-sm rounded-full ${badge =="Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${badge == "Popular" && 'bg-[#E1E7FF] text-[#6f40fc]'} ${badge == "New" && 'bg-[#55ff9c94] text-[#0A883E]'}`}>{badge}</div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{shortDescription}</p>
      </div>
      <div>
        <p>
          <span>{pricingPerMonth}</span>/{subscription}
        </p>
      </div>
      <ul>
        {advantages.map((item, idx) => (
          <li className="flex gap-1 justify-start items-center" key={idx}>
            <CheckCircle size={16} className="text-green-400"></CheckCircle>
            {item}
          </li>
        ))}
      </ul>
      <button className="common-btn w-full mt-auto">Buy Now</button>
    </div>
  );
};

export default ProductCard;
