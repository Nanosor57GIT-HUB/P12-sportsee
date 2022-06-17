import React from "react";

const Energy = () => {
 






  return (
    <div className="container-energy">
     
      <div className="calories" >
        <img
          src="img/calories-icon.svg"
          className="img-energy"
          alt="calories"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">1.930Cal</p>
          
          <p className="title-energy">Calories</p>
        </div> 
      </div>


      <div className="proteines">
        <img
          src="img/protein-icon.svg"
          className="img-energy"
          alt="proteines"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">155g</p>
          <p className="title-energy">Proteines</p>
        </div>
      </div>

      <div className="glucides">
        <img
          src="img/carbs-icon.svg"
          className="img-energy"
          alt="glucides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">290g</p>
          <p className="title-energy">Glucides</p>
        </div>
      </div>

      <div className="lipides">
        <img src="img/fat-icon.svg" className="img-energy" alt="lipides"></img>
        <div className="infos-energy">
          <p className="number-energy">50g</p>
          <p className="title-energy">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Energy;
