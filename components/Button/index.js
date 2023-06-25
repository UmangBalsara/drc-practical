import React from "react";

const Button = ({
  type = "button",
  title = "",
  onClick = () => {},
  className,
}) => {
  return (
    <button
      type={type}
      className={`flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg ${className}`}
      onClick={(e) => onClick(e)}
    >
      {title}
    </button>
  );
};

export default Button;
