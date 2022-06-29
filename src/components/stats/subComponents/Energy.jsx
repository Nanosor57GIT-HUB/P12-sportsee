import React from "react";

const Energy = (props) => {
  // console.log(props);

    const datas = props.data;
//console.log(datas);
    const data = datas.data;
   // console.log(data);
  
   // const data3 = data.todayScore;
  //  console.log(data3);
   // const id = data.id;
 //   console.log(id);
    const energy = data.keyData;
  //  console.log(data5); 
  
  return (
    <div className="container-energy">
      <div className="calories">
        <img
          src={process.env.PUBLIC_URL + "/img/calories-icon.svg"}
          className="img-energy"
          alt="calories"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.calorieCount}Cal</p>

          <p className="title-energy">Calories</p>
        </div>
      </div>

      <div className="proteines">
        <img
          src={process.env.PUBLIC_URL + "/img/protein-icon.svg"}
          className="img-energy"
          alt="proteines"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.proteinCount}g</p>
          <p className="title-energy">Proteines</p>
        </div>
      </div>

      <div className="glucides">
        <img
          src={process.env.PUBLIC_URL + "/img/carbs-icon.svg"}
          className="img-energy"
          alt="glucides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.carbohydrateCount}g</p>
          <p className="title-energy">Glucides</p>
        </div>
      </div>

      <div className="lipides">
        <img
          src={process.env.PUBLIC_URL + "/img/fat-icon.svg"}
          className="img-energy"
          alt="lipides"
        ></img>
        <div className="infos-energy">
          <p className="number-energy">{energy.lipidCount}g</p>
          <p className="title-energy">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Energy;