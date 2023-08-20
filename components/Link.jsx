import React from "react";

const Link = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={
        "group text-black dark:text-white transition duration-150 " + className
      }
    >
      {children}
      <span
        className={`block max-w-0 group-hover:max-w-full transition-all duration-150 h-0.5 bg-white`}
      ></span>
    </a>
  );
};

export default Link;
