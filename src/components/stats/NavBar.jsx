import React from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div className="horizontalMenu">
      <nav>
      <Link to="/p12-sportsee" >
        Accueil
      </Link>
      </nav>
      <Link to="#Profil">Profil</Link>
      <Link to="#Réglage">Réglage</Link>
      <Link to="#Communauté">Communauté</Link>
    </div>
  );
};

export default NavBar;
