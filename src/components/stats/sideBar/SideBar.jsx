import React from "react";

/**
 * Création des liens sur le menu vertical
 * @returns Retourne les icones(liens) de navigation verticale ainsi que le copyright
 */
const SideBar = () => {
  return (
    <div className="verticalMenu">
      <div className="containerIcon">
        <nav className="navIco">
          <img
            src={process.env.PUBLIC_URL + "/img/iconYoga.svg"}
            className="icoBtn"
            alt=""
            style={{ width: 64 }}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/iconNatation.svg"}
            className="icoBtn"
            alt=""
            style={{ width: 64 }}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/iconVélo.svg"}
            className="icoBtn"
            alt=""
            style={{ width: 64 }}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/iconAltère.svg"}
            className="icoBtn"
            alt=""
            style={{ width: 64 }}
          />
        </nav>
      </div>

      <p className="copyright">Copiryght, SportSee 2022</p>
    </div>
  );
};

export default SideBar;
