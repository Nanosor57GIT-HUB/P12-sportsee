import React from "react";

/**
 * Création du container pour le logo
 * @returns Mise en place du logo dans le header statistiques
 */
const Logo = () => {
  return (
    <div className="logoContainer">
      <img
        src={process.env.PUBLIC_URL + "/img/logo.svg"}
        className="logo"
        alt="logo_SportSee"
      ></img>
    </div>
  );
};

export default Logo;
