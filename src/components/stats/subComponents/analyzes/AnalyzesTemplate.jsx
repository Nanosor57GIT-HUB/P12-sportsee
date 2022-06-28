import React from "react";
import DailyActivity from "./DailyActivity";
import AverageDuration from "./AverageDuration";
import SpiderAnalytics from "./SpiderAnalytics";
import ObjectiveScore from "./ObjectiveScore";


const AnalyzesTemplate = (props) => {
 console.log(props.data);
/****************remonter data pour ne passer que comme variable dans la funtion */
//  const datas = props.data;

//  const data = datas.data;
//  console.log(data);
// /**************************************************** */
//  const data3 = data.todayScore;
//  console.log(data3);
 
//  const data5 = data.keyData;
//  console.log(data5); 

  return (
    <div className="containerAnanlytics">
      <DailyActivity />

      <div className="container-activity">
        
        <AverageDuration />
        <SpiderAnalytics />
       <ObjectiveScore />
      </div>
    </div>
  );
};

export default AnalyzesTemplate;
