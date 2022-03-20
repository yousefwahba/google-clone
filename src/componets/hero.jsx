import React, { useEffect, useRef, useState } from "react";

import Linkes from "./Linkes";
import { Results } from "./Results";
import { useStateContext } from "../context/ResultContextProvider";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { setSearchTerm, searchTerm } = useStateContext();
  const inputField = useRef();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const focusInput = useEffect(() => {
    inputField.current.focus();
  }, []);

  const handleInput = (e) => {
    setText(e.target.value.trim());
  };

  const addTextToContext = (e) => {
    e.preventDefault();
    setSearchTerm(text);
    inputField.current.value = "";
    e.target.value = "";
    navigate("/search");
  };

  return (
    <div className="container mx-auto">
      <div className=" h-[50vh] grid grid-cols-8 grid-rows-3 items-center justify-center">
        <div className="col-start-3 row-start-2 col-end-7">
          <div className="mt-[-6rem]">
            <div className="text-center font-medium text-[3rem] p-4">
              Find search engine
            </div>
            <div className="text-center relative">
              <form>
                <input
                  type="text"
                  name=""
                  placeholder="Enter,what are you want?"
                  className="rounded-full pr-8 py-2 pl-4 w-[90%]"
                  onChange={handleInput}
                  ref={inputField}
                />
                <button
                  type="submit"
                  onClick={addTextToContext}
                  className="absolute top-[20%] right-[12%]"
                >
                  🔍
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Linkes />
      <Results />
    </div>
  );
};

export default Hero;
