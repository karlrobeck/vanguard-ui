import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`flex flex-col border shadow-sm rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;

Card.Image = ({ href, alt }) => {
  return <img src={href} className="w-full h-auto rounded-t-xl" alt={alt} />;
};

Card.Body = ({ children }) => {
  return <div className="p-4 md:p-5">{children}</div>;
};

Card.Header = ({ children }) => {
  return <div className="text-lg font-bold text-inherit">{children}</div>;
};

Card.Text = ({ children }) => {
  return <p className="mt-1 text-inherit">{children}</p>;
};
