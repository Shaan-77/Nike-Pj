import React from "react";
import { products } from "../Constants";
import PopularProductsCard from "../Components/PopularProductsCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container -mt-[100px] max-sm:mt-12  ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-orange-600">Popular</span> Product
        </h2>
        <p className="max-w-lg mt-2 font-montserrat text-slate-600 ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm-gap-6 gap-14 ">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
