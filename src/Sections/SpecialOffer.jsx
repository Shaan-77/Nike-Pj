import React from "react";
import { offer } from "../assets/images";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1  hover:scale-[1.1] transition ease-in-out duration-200">
        <img
          src={offer}
          alt=""
          width={600}
          height={500}
          className="object-contain w-full "
        />
      </div>
      <div
        className="flex
      flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize   font-bold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selectins to incredible sabings, we
          offer unparalledled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text :">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short exceptional.
        </p>
        <div className="mt-7 flex flex-wrap gap-5 ">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            hoverBG="hover:bg-coral-red"
            hoverText="hover:text-white"
            bordercolor="border-red-600"
            textcolor="text-coral-red"
            iconURL={arrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
