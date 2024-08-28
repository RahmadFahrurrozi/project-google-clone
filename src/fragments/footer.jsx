import React from "react";
import Foot1 from "../components/footers/foot1";
import Foot2 from "../components/footers/foot2";
import Foot3 from "../components/footers/fooo3";
const Footer = () => {
  return (
    <footer className="bg-slate-200 bg-opacity-20 backdrop-blur-lg py-4 px-12 w-full flex flex-col container">
      <div className="mb-12 mt-6">
        <Foot1 />
      </div>
      <hr className="border-slate-300" />
      <div className="mt-12">
        <Foot2 />
      </div>
      <hr className="border-slate-300" />
      <div>
        <Foot3 />
      </div>
    </footer>
  );
};

export default Footer;
