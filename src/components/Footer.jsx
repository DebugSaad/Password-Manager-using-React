import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center">
      <div className="logo font-bold text-2xl">
        <span className="text-green-700">&lt;</span>
        Pass
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="flex gap-3">
        Created with <img className="w-5 invert" src="icons/wolf.svg" alt="Wolf" /> by{" "}
        <span className="font-semibold">Saad-Ur-Rehman</span>
      </div>
    </div>
  );
};

export default Footer;
