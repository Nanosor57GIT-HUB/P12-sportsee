import React from "react";
import { Link } from "react-router-dom";

/**
 * Création du jsx de la page d'accueil
 * @returns Retourne la page d'accueil et les userId pour la démonstartion
 */
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
            <Link to="/statistiques/12" className="user12Btn userBtn">
              User-12
            </Link>
            <Link to="/statistiques/18" className="user18Btn userBtn">
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
            <br />
            <span style={{ color: "#000000" }}>
              (Page created for the demonstration between the Ids)
            </span>
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
