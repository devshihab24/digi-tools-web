import { CheckCircle, CircleCheck } from "lucide-react";
import { toast } from "react-toastify";

const ProductCard = ({ product, setCartItem, cartItem,setPriceCount, priceCount }) => {
  const {
    icon,
    features,
    price,
    description,
    name,
    tag,
    period,
  } = product;
  // console.log(products);
  const handleAddToCart = () =>{
    const existingItem = cartItem.find(item=>item.id === product.id)
    if(existingItem) return;
    const newCartItem = (previous => [...previous, product])
    setCartItem(newCartItem)
    setPriceCount(priceCount + parseInt(price))
    toast.success("Item added successfully!")
  }
  return (
    <div className="relative flex flex-col p-5 space-y-5 rounded-xl card-shadow product-card">
      <div className="">
        <img className="h-12" src={icon} alt="" />
        <div className={`absolute top-3 right-5 py-1 px-3 text-sm rounded-full ${tag =="Best Seller" && "bg-[#FEF3C6] text-[#BB4D00]"} ${tag == "Popular" && 'bg-[#E1E7FF] text-[#6f40fc]'} ${tag == "New" && 'bg-[#55ff9c94] text-[#0A883E]'}`}>{tag}</div>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <p>
          <span>${price}</span>/{period}
        </p>
      </div>
      <ul>
        {features.map((item, idx) => (
          <li className="flex gap-1 justify-start items-center" key={idx}>
            <CheckCircle size={16} className="text-green-400"></CheckCircle>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={handleAddToCart} className="common-btn w-full mt-auto">Buy Now</button>
    </div>
  );
};

export default ProductCard;
