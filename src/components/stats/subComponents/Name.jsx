import React from "react";


const Name = (user) => {
 
  const datas = user.data;
  //console.log(datas);
  const data = datas.data;
 // console.log(data);
  const datax = data.userInfos;
 // console.log(datax);
  const name = datax.firstName
 // console.log(name);
  

  return (
    <div className="name-congratulations">
      <h1 className="hello">
        Bonjour <span className="firstName">{name}</span>
      </h1>

      <p className="congratulation">
        "Félicitation! Vous avez explosé vos objectifs"
        <img src={process.env.PUBLIC_URL + "/img/frappeMains.png"} className="bravo" alt="Bravo-icon"></img>
      </p>
    </div>
  );
};;

export default Name;
