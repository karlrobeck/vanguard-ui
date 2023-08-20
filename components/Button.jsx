import React from "react";
const Button = ({ children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`py-3 px-4 inline-flex justify-center items-center gap-2 text-sm rounded-md ${className} hover:bg-opacity-50 transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;

Button.Outline = ({
  children,
  type = "button",
  className = "",
  variant = "",
}) => {
  return (
    <button
      type={type}
      className={`py-3 px-4 inline-flex justify-center items-center gap-2 text-sm rounded-md border ${className} bg-opacity-0 hover:bg-opacity-100 transition-all`}
    >
      {children}
    </button>
  );
};
