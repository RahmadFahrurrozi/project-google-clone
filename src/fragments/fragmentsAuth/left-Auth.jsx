import React from "react";

const leftAuth = (props) => {
  const { children } = props;
  return (
    <div className="w-full flex items-start gap-6 justify-start flex-col lg:w-1/2">
      <img
        className="w-11 h-11"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
        alt="logo Google"
      />
      <h1 className="text-4xl font-normal ">{children}</h1>
      <p className="text-base">{children}</p>
    </div>
  );
};

export default leftAuth;
