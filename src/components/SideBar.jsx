import React from "react";

const SideBar = () => {




  return (
    <div className="verticalMenu">
      <div className="containerIcon">
        <img
          src="img/iconYoga.svg"
          className="icoBtn"
          alt=""
          style={{ width: 64 }}
         
        />
        <img
          src="img/iconNatation.svg"
className="icoBtn"
          alt=""
          style={{ width: 64 }}
          
        />
        <img
          src="img/iconVélo.svg"
className="icoBtn"
          alt=""
          style={{ width: 64 }}
         
        />
        <img
          src="img/iconAltère.svg"
          className="icoBtn"
          alt=""
          style={{ width: 64 }}
          
        />
      </div>
      <p className="copyright">Copiryght, SportSee 2022</p>
    </div>
  );
};

export default SideBar;
