import React from "react";
import DailyActivity from "./subComponents/DailyActivity";
import RadarCharts from "./subComponents/RadarCharts";
import SessionTime from "./subComponents/SessionTime";
import TodayScore from "./subComponents/TodayScore";


const Analytics = (props) => {
  // console.log(props);

  return (
    <div className="containerAnanlytics">
      <DailyActivity />

      <div className="container-activity">
      <SessionTime data={props.data} />
        <RadarCharts />
      <TodayScore data={props.data} />
      </div>
    </div>
  );
};;

export default Analytics;
