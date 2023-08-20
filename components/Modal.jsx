import { Transition } from "@headlessui/react";
import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext(null);

const useModal = () => {
  return useContext(ModalContext);
};

const Modal = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ModalContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Toggle = ({ children, className = "" }) => {
  const { setToggle } = useModal();

  return (
    <div
      className={"cursor-pointer " + className}
      onClick={() => setToggle((prev) => !prev)}
    >
      {children}
    </div>
  );
};
Modal.Body = ({ children, className = "" }) => {
  const { toggle } = useModal();

  return (
    <Transition
      show={toggle}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={"fixed inset-0 bg-opacity-75 bg-black " + className}
    >
      {children}
    </Transition>
  );
};

export default Modal;
