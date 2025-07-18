import React from "react";

const ShoeCard = ({ imgURl, ChangeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURl.bigShoe) {
      ChangeBigShoeImage(imgURl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 max-sm:mr-3 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 hover:scale-[1.1] transition ease-in-out duration-200 hover:border-2 hover:border-coral-red ">
        <img
          src={imgURl.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
