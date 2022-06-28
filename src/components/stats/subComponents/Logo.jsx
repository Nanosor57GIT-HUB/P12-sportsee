import React from "react";

const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={process.env.PUBLIC_URL + "/img/logo.svg"} className="logo" alt="logo_SportSee"></img>
    </div>
  );
};

export default Logo;
