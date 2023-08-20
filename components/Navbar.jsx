import React from "react";

const Navbar = ({ children, className }) => {
  return (
    <header
      class={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full ${className} text-sm py-4 dark:bg-gray-800`}
    >
      {children}
    </header>
  );
};

const Content = ({ children, className }) => {
  return (
    <nav
      className={`max-w-[85rem] w-full px-4 ${className}`}
      aria-label="Global"
    >
      {children}
    </nav>
  );
};

const Brand = ({ children, href }) => {
  return (
    <a href={href} className="flex-none text-xl font-semibold dark:text-white">
      {children}
    </a>
  );
};
Navbar.Content = Content;
Navbar.Brand = Brand;
export default Navbar;
