import React from "react";

const ListGroup = ({ children, className }) => {
  return (
    <ul className={`max-w-xs rounded-xl flex flex-col ${className}`}>
      {children}
    </ul>
  );
};

ListGroup.Item = ({ children, className }) => {
  return (
    <li
      className={`inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-inherit border  text-inherit -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg border-inherit ${className}`}
    >
      {children}
    </li>
  );
};
export default ListGroup;
