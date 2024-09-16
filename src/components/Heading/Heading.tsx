import React from "react";
const Heading = ({ children }) => {
  return (
    <div>
      <h1 className="p-0 text-start text-2xl md:text-5xl font-bold w-1/2 md:w-1/3 my-10">
        {children}
      </h1>
    </div>
  );
};
export default Heading;
