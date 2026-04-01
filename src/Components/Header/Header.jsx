import { ShoppingCart } from "lucide-react";
import "./header.css";

const Header = ({cartItem}) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="navbar py-5 lg:px-20 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            </ul>
          </div>
          <a className="text-3xl font-bold logo">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className=" h-10 w-10 flex justify-center items-center relative">
            <ShoppingCart className="hover:cursor-pointer shopping-cart"></ShoppingCart>
            <span className="border h-5 w-5 flex justify-center items-center bg-red-500 rounded-full text-white absolute -top-[10%] -right-[5%] translate-y-[10%] translate-x-[5%] text-center">{cartItem.length}</span>
          </div>
          <a className="hidden md:block hover:cursor-pointer font-semibold">Login</a>
          <button className="common-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
