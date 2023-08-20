import React from "react";

const Badge = ({ children, className, variant }) => {
  if (variant) {
    if (variant === "white") {
      return (
        <span
          className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-${variant}-500 text-gray-600`}
        >
          {children}
        </span>
      );
    }
    return (
      <span
        className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-${variant}-500 text-white`}
      >
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">
      {children}
    </span>
  );
};

export default Badge;
