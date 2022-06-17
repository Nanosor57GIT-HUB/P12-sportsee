import React from "react";


const Name = () => {

  
  return (
    <div className="name-congratulations">
      <h1 className="hello">
        Bonjour <span className="firstName">Karl</span>
      </h1>

      <p className="congratulation">
        "Félicitation! Vous avez explosé votre score"
        <img src="img/frappeMains.png" className="bravo" alt="Bravo-icon"></img>
      </p>
    </div>
  );
};;

export default Name;
