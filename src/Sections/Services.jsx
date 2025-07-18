import React from "react";
import { services } from "../Constants";
import ServiceCard from "../Components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 ">
      <h1 className="flex-1 text-8xl font-palanquin font-bold -mt-20  max-sm:text-[40px]">
        Our <span className="text-coral-red"> Services</span>
      </h1>

      <div className="max-container flex justify-center flex-wrap gap-9 mt-14">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
