import React from "react";
import pawGif from "../assets/paw.gif";

export default function PawLuck() {
  return (
    <div className="px-26 absolute bottom-8 left-10 flex flex-col items-center gap-2">
      

      <div className="bg-white px-4 py-1.5 rounded-lg shadow-md border border-black/10 rotate-1">
        <p className="text-[15px] font-serifDisplay font-semibold text-black leading-none">
          Best of Luck !
        </p>
      </div>

    
      <img
        src={pawGif}
        alt="Paw"
        className="w-[120px] h-auto drop-shadow-lg"
      />
    </div>
  );
}
