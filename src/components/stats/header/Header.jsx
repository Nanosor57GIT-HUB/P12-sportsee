import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

/**
 * Intégration des composants Logo et NavBar dans le header
 * @returns Retourne les composants Logo/NavBar
 */
const Header = () => {
  return (
    <div className="navH">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
