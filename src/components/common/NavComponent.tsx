import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const NavComponent = () => {
  const { number } = useSelector((state: RootState) => state.counter);

  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        fontSize: "1.25rem",
        fontWeight: "bold",
      }}
    >
      State Value : {number}
    </div>
  );
};

export default NavComponent;
