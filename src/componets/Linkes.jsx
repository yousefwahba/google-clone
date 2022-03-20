import React from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../context/ResultContextProvider";

const Linkes = () => {
  const { setSearchTerm, searchTerm } = useStateContext();

  return (
    <div
      className={
        searchTerm ? "text-center mb-4 block" : "text-center mb-4 hidden"
      }
    >
      <NavLink to="/">🏛 Home </NavLink>
      <NavLink to="/search" className="ml-4">
        🔍Search{" "}
      </NavLink>
      <NavLink to="/images" className="ml-4">
        📷Images
      </NavLink>
      <NavLink to="/videos" className="ml-4">
        🎥Videos
      </NavLink>
      <NavLink to="/news" className="ml-4">
        📰News
      </NavLink>
    </div>
  );
};

export default Linkes;
