import React from "react";

const ServiceCard = ({ imgURL, lable, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 shadow-3xl py-16  transition ease-in-out duration-200  hover:scale-[1.1]">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={lable} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold ">
        {lable}
      </h3>
      <p className="mt-3 breaks-words font-montserrat text-lg leading-normal text-slate-600late ">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
