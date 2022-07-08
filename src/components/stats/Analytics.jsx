import React from "react";
import DailyActivity from "./subComponents/DailyActivity";
import RadarCharts from "./subComponents/RadarCharts";
import SessionTime from "./subComponents/SessionTime";
import TodayScore from "./subComponents/TodayScore";
import useFetch from "../useFetch";

const Analytics = (props) => {
  const userId = 12
   
   const { data: perf } = useFetch(
     `http://localhost:3000/user/${userId}/performance`
   );
  
console.log(perf);

  return (
    <div className="containerAnanlytics">
      <DailyActivity />

      <div className="container-activity">
      <SessionTime data={props.data} />
       {perf && <RadarCharts data={perf} />}
      <TodayScore data={props.data} />
      </div>
    </div>
  );
};;

export default Analytics;
