import React, { createContext, useContext, useState } from "react";
import { Type, Variant } from "./config";

const AlertContext = createContext(undefined);

const useAlert = () => {
  return useContext(AlertContext);
};

const Alert = ({ children, className = "", type = "default" }) => {
  const [toggle, setToggle] = useState(true);

  return (
    toggle && (
      <AlertContext.Provider value={{ toggle, setToggle }}>
        <div className={`${Type.base} ${Variant[type]} ${className}`}>
          {children}
        </div>
      </AlertContext.Provider>
    )
  );
};

export default Alert;

Alert.Toggle = ({ children, className = "" }) => {
  const { setToggle } = useAlert();

  return (
    <div
      className={`cursor-pointer ${className}`}
      onClick={() => setToggle((prev) => !prev)}
    >
      {children}
    </div>
  );
};
