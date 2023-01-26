import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-fit border-t-2 border-slate-500 mt-5">
      <div className="p-2 w-full">
        <p className="text-slate-400 text-xs font-mons font-medium text-center">
          Created by{" "}
          <span className="font-bold text-slate-200">Gama Mujur Effendy</span>
        </p>
        <p className="text-slate-400 text-xs font-mons font-medium text-center mt-1">
          with
        </p>
        <p className="text-center">
          <span className="text-cyan-500 font-bold">React JS -</span>{" "}
          <span className="text-teal-500 font-bold">Tailwind CSS</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
