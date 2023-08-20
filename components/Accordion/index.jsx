import React, { createContext, useContext, useState } from "react";
import { Type, Variant } from "./config";

const AccordionContext = createContext();

const useAccordion = () => {
  return useContext(AccordionContext);
};

const Accordion = ({ children, className = "" }) => {
  return <div className={`${Type.base} ${className}`}>{children}</div>;
};

const Item = ({ children, className = "", type = "default" }) => {
  const [toggle, setToggle] = useState();

  return (
    <AccordionContext.Provider value={{ toggle, setToggle, type }}>
      <div className={Type[type]?.item}>{children}</div>
    </AccordionContext.Provider>
  );
};

const Header = ({
  children,
  className = "",
  stretch = false,
  withIndicator = true,
  arrow = false,
}) => {
  const { toggle, setToggle, type } = useAccordion();

  const indicator = withIndicator
    ? arrow
      ? {
          open: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          ),
          close: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          ),
        }
      : {
          open: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-dash-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
              />
            </svg>
          ),
          close: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          ),
        }
    : undefined;

  return (
    <div
      onClick={() => setToggle((prev) => !prev)}
      className={`${Type[type]?.header} ${className} ${
        withIndicator && "flex items-center gap-3"
      } ${stretch && "flex-row-reverse justify-between"} cursor-pointer`}
    >
      {indicator && toggle ? indicator?.open : indicator?.close}
      {children}
    </div>
  );
};

const Body = ({ children, className = "" }) => {
  const { toggle, type } = useAccordion();
  return (
    toggle && (
      <div className={`${Type[type]?.body} ${className}`}>{children}</div>
    )
  );
};
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Body = Body;
export default Accordion;
