import React from "react";
import NavBar from "./NavBar";

interface IPropsLayoudC {
  children: any;
}

const Layoud = ({ children }: IPropsLayoudC) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layoud;
