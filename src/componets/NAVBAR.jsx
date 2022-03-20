import React from "react";

const NAVBAR = ({ handleTheme, mode }) => {
  return (
    <div className="pl-4 pt-3 pb-1 flex items-center justify-start ">
      <div className="mr-4 w-[40px] h-[40px] text-center hover--icons bg-amber-900 cursor-pointer text-white rounded-full pt-1">
        y
      </div>
      <div className="w-[40px] h-[40px] cursor-pointer mr-4  p-1 hover:bg-gray-200 hover:rounded-full">
        <svg className="gb_Se" focusable="false" viewBox="0 0 24 24">
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
      </div>
      <a href="#a" className="mr-2 block hover:underline">
        Image
      </a>
      <a href="#a" className="hover:underline">
        Mail
      </a>
      <button type="submit" className="ml-8 text-xl" onClick={handleTheme}>
        {mode ? "🔆" : "🌙"}
      </button>
    </div>
  );
};

export default NAVBAR;
