import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

  

  
  return (
    <div className="homePage">
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
      <div>
        <div className="titleDemo">
          <h1 className="titleHome">DEMO SportSee</h1>
          <p className="subTitleDemo">
            Page crée pour la démonstartion entre les Ids
          </p>
        </div>
        <div className="logoIsolé">
          <img
            src={process.env.PUBLIC_URL + "/img/logoIsolé.svg"}
            className="logoImg"
            alt="logo_SportSee"
          ></img>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
