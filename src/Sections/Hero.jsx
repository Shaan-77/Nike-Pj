import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";
const Hero = () => {
  const [bigShoeimg, setBigshoeimg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  justify-center min-h-screen gap-10  "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl  max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-sm:z-0">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-700 text-lg leading-8 mt-6 mb-4 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stats) => {
            return (
              <div key={stats.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stats.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-700">
                  {stats.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-slate-600 bg-hero bg-cover bg-center max-sm:bg-cover
      "
      >
        <img
          src={bigShoeimg}
          alt="Shoe1"
          width={510}
          height={400}
          className="object-contain relative z-10 max-sm:z-0 hover:scale-[1.1] transition ease-in-out duration-200"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURl={shoe}
                ChangeBigShoeImage={(shoe) => {
                  setBigshoeimg(shoe);
                }}
                bigShoeImg={bigShoeimg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
