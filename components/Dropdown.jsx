import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext(undefined);

const useDropdown = () => {
  return useContext(DropdownContext);
};

const Dropdown = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <DropdownContext.Provider value={{ toggle, setToggle }}>
      <div className="relative w-full">{children}</div>
    </DropdownContext.Provider>
  );
};

const Toggle = ({ children }) => {
  const { setToggle } = useDropdown();

  return <div onClick={() => setToggle((prev) => !prev)}>{children}</div>;
};
const Content = ({ children }) => {
  const { toggle } = useDropdown();

  return <>{toggle && <div className="absolute py-4">{children}</div>}</>;
};

Dropdown.Toggle = Toggle;
Dropdown.Content = Content;
export default Dropdown;
