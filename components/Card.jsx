import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`flex flex-col border shadow-sm rounded-xl ${className}`}>
      {children}
    </div>
  );
};

const Image = ({ href, alt }) => {
  return <img src={href} className="w-full h-auto rounded-t-xl" alt={alt} />;
};

const Body = ({ children }) => {
  return <div className="p-4 md:p-5">{children}</div>;
};

const Header = ({ children }) => {
  return <div className="text-lg font-bold text-inherit">{children}</div>;
};

const Text = ({ children }) => {
  return <p className="mt-1 text-inherit">{children}</p>;
};

Card.Image = Image;
Card.Body = Body;
Card.Header = Header;
Card.Text = Text;
export default Card;
