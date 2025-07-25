import React from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div
        className="flex
      flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize   font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3  lg:max-w-lg">
            We Provide you
          </span>
          <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red ">Quality</span> Shoe
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text :">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-7  ">
          <Button label="view Now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center hover:scale-[1.1] transition ease-in-out duration-200">
        <img
          src={shoe8}
          alt="shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
