import React from "react";
import DailyActivity from "./subComponents/DailyActivity";
import RadarCharts from "./subComponents/RadarCharts";
import SessionTime from "./subComponents/SessionTime";
import TodayScore from "./subComponents/TodayScore";
import UseFetch from "../UseFetch";
import { useParams } from "react-router-dom";



const Analytics = (props) => {
  const {userId} = useParams()

  
  
  const { data: session } = UseFetch(
       `http://localhost:3000/user/${userId}/average-sessions`
     );
   
   const { data: performance } = UseFetch(
     `http://localhost:3000/user/${userId}/performance`
   );

   
   // console.log(performance.data);
   

     const { data: activity } = UseFetch(
      `http://localhost:3000/user/${userId}/activity`
     );
   

  return (
    <div className="containerAnanlytics">
      <div className="container-activity">
        {activity && <DailyActivity data={activity} />}
      </div>
      <div className="container-sessions">
        {session && <SessionTime data={session} />}
        {performance && <RadarCharts data={performance} />}
        <TodayScore data={props.data} />
      </div>
    </div>
  );
};;

export default Analytics;
