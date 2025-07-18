import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center ">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] cursor-pointer rounded-[10px] hover:scale-[1.1] transition ease-in-out duration-200"
      />

      <div className="mt-4 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat leading-normal text-xl text-slate-700 ">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl  leading-normal text-coral-red ">
        {" "}
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
