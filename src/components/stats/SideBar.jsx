import React from "react";
const SideBar = () => {




  return (
    <div className="verticalMenu">
      <div className="containerIcon">
        
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
      </div>
      <p className="copyright">Copiryght, SportSee 2022</p>
    </div>
  );
};

export default SideBar;
