import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
 // console.log(props.data);
    return (
      <div className="homeNav">
        <img
          src={process.env.PUBLIC_URL + "/img/logo.svg"}
          className="logoHome"
          alt="logo_SportSee"
        ></img>

        <div className="userLink">
          <nav className="navId">
            <Link to="/statistiques/12" className="a">
              User-12
            </Link>
            <Link to="/statistiques/18" className="a">
              User-18
            </Link>
          </nav>
        </div>
      </div>
    );
};

export default Header;