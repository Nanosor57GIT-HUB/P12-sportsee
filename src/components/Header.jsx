import React from "react";
import Logo from "./subComponents/Logo";
import NavBar from "./subComponents/NavBar";

const Header = () => {
  return (
    <div className="navH">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
