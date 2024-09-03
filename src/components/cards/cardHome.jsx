import React from "react";
import Button from "../button";

const CardHome = (props) => {
  const { iconLogo, title, description, hightlightText } = props;
  return (
    <div className="flex flex-col items-center gap-8 rounded-md p-8 border border-slate-200 max-w-md max-h-[32rem]">
      <div className="bg-slate-200/40 w-36 h-40 rounded-[50%] flex justify-center items-center ">
        <img className="w-24 h-24" src={iconLogo} alt="" />
      </div>
      <h3 className="text-xl text-center font-medium leading-10">
        {title}{" "}
        <span className="text-blue-500 py-2 px-4 bg-blue-200/70 rounded-full">
          {hightlightText}
        </span>
      </h3>
      <p className="text-slate-600 text-center">{description}</p>
      <Button variant="bg-blue-600">Selengkapnya</Button>
    </div>
  );
};

export default CardHome;
