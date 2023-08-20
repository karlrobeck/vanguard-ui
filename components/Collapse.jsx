"use client";
import { Transition } from "@headlessui/react";
import React, { useState, createContext, useContext } from "react";

const CollapseContext = createContext(undefined);

const useCollapse = () => {
  return useContext(CollapseContext);
};
const Collapse = ({ children, className }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <CollapseContext.Provider value={{ toggle, setToggle }}>
      <collapse className={`w-full p-4 ${className} space-y-4`}>
        {children}
      </collapse>
    </CollapseContext.Provider>
  );
};

Collapse.Body = ({ children, className }) => {
  const { toggle } = useCollapse();

  return (
    <Transition
      show={toggle}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={"w-full overflow-hidden"}
    >
      {children}
    </Transition>
  );
};
Collapse.Toggle = ({ children, className }) => {
  const { setToggle } = useCollapse();

  return <div onClick={() => setToggle((prev) => !prev)}>{children}</div>;
};

export default Collapse;
