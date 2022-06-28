import React from 'react';

const body = () => {
    return (
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
    );
};

export default body;