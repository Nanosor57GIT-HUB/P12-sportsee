import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="horizontalMenu">
      <nav>
      <Link to="/" >
        Accueil
      </Link>
      </nav>
      <a href="#Profil">Profil</a>
      <a href="#Réglage">Réglage</a>
      <a href="#Communauté">Communauté</a>
    </div>
  );
};

export default NavBar;
