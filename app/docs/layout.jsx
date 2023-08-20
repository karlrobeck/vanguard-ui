import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container px-4 h-screen flex justify-between">
      <aside>Left Sidebar</aside>
      {children}
      <aside>Right Sidebar</aside>
    </div>
  );
};

export default Layout;
