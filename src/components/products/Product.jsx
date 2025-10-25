import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Product = ({ product }) => {
  const {
    name,
    image,
    price,
    category,
    description,
    rating,
    stock,
    brand,
    tags,
  } = product || {};

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-neutral-900 p-4 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative">
      <div className="relative rounded-2xl overflow-hidden">
        <img
          className="w-full h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
        <p className="absolute top-3 right-3 bg-black/40 hover:bg-black/60 text-white font-semibold py-2 px-4 rounded-full backdrop-blur-md border border-white/20 shadow-md transition-all duration-300 cursor-pointer">
          ${price}
        </p>
      </div>
      <div className="space-y-3 mt-4">
        <p className="text-white text-2xl font-semibold">{name}</p>
        <p className="text-gray-300 text-sm">{description}</p>
        <p className="text-gray-400 text-sm font-medium">
          Category: {category}
        </p>
        <p className="text-gray-400 text-sm font-medium">Brand: {brand}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">{renderStars(rating)}</div>

        {/* Stock info */}
        <p
          className={`text-sm font-medium ${
            stock < 5 ? "text-red-400" : "text-green-400"
          }`}
        >
          {stock > 0 ? `${stock} in stock` : "Out of stock"}
        </p>

        {/* Add to Cart button */}
        <button
          className={`w-full py-2 rounded-xl font-semibold text-white transition-all duration-300 ${
            stock > 0
              ? "bg-indigo-600 hover:bg-indigo-500 shadow-md hover:shadow-lg cursor-pointer"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          disabled={stock === 0}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
