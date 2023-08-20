import React from "react";

const Nav = ({ children }) => {
  return (
    <div>
      <nav class="flex space-x-6">{children}</nav>
    </div>
  );
};

export default Nav;

Nav.Link = ({ children, href }) => {
  return (
    <a
      class="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700"
      href={href}
    >
      {children}
    </a>
  );
};
