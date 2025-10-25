import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <header className="bg-indigo-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo and menu bar */}
        <div>
          <h1 className="text-xl md:text-2xl font-semibold ">ShopNex</h1>
        </div>
        <div className="flex items-center gap-5 text-lg">
          <Link to={`/`}>Home</Link>
          <Link to={"/cart"}>
            <FaShoppingCart size={21} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
