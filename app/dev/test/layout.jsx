import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default Layout;
