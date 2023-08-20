import React from "react";

const Input = ({ type = "text", placeholder = "", className = "" }) => {
  return (
    <input
      type={type}
      className={
        "py-3 px-4 block w-full rounded-md text-sm bg-inherit border text-inherit " +
        className
      }
      placeholder={placeholder}
    />
  );
};

const Label = ({ children, className = "" }) => {
  return (
    <label
      className={
        "block text-sm font-medium mb-2 bg-inherit text-inherit " + className
      }
    >
      {children}
    </label>
  );
};
const TextArea = ({ children, className = "", rows = "3" }) => {
  return (
    <textarea
      class={
        "py-3 px-4 block w-full border rounded-md text-sm bg-inherit text-inherit " +
        className
      }
      rows={rows}
    />
  );
};
Input.Label = Label;
Input.TextArea = TextArea;
export default Input;
