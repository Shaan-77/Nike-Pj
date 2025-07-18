import React from "react";
import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../Constants";

const CostumerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red ">Customers </span>
        Says?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg  text-center">
        hear genuine stories from our satisfied customers avout their
        exceptional experiences with us
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center mag-lg:flex-col gap-14 max-sm:flex-col ">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CostumerReviews;
