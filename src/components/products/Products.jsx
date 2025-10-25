import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* all products  */}
      <div className="md:col-span-2 col-span-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.length === 0 ? (
            <p>No products found</p>
          ) : (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
      {/* add products  */}
      <div className="col-span-1">add products</div>
    </div>
  );
};

export default Products;
