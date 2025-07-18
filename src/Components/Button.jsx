import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textcolor,
  bordercolor,
  hoverBG,
  hoverText,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textcolor} ${bordercolor} ${hoverBG} ${hoverText}`
        : "bg-coral-red  text-white border-coral-red"
    } hover:bg-red-600 transition ease-out duration-100 rounded-full ${
        fullWidth && "w-full"
      } `}
    >
      {label}
      {iconURL ? (
        <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
