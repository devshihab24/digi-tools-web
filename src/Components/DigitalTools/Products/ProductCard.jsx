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
    <div className="relative p-5 space-y-5 rounded-xl card-shadow">
      <div className="">
        <img className="h-12" src={img} alt="" />
        <div className={`absolute top-3 right-5 py-1 px-3 text-sm rounded-full ${badge =="Popular" && "bg-[#FEF3C6] text-[#BB4D00]"}`}>{badge}</div>
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
          <li key={idx}>
            <CheckCircle></CheckCircle>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
