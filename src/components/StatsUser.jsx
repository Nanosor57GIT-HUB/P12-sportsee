import React from "react";
import Name from "./stats/statsUser/Name";
import DailyActivity from "./stats/statsUser/DailyActivity";
import RadarCharts from "./stats/statsUser/RadarCharts";
import SessionTime from "./stats/statsUser/SessionTime";
import TodayScore from "./stats/statsUser/TodayScore";
import Energy from "./stats/statsUser/Energy";
import useFetch from "../service/useFetchService";
import { useParams } from "react-router-dom";

/**
 * @description Setting up the API call service
 * @const {object} userId Returns a dynamic parameters object from the URL
 * @const {array} user Returns the user array
 * @const {array} session returns the average session array
 * @const {array} performance returns the performance array
 * @const {array} activity returns the activity array
 * @returns Returns the call from each api address
 */
const AnalyticsCharts = () => {
  const { userId } = useParams();

  const { data: user } = useFetch(`http://localhost:3000/user/${userId}`);

  const { data: session } = useFetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  );

  const { data: performance } = useFetch(
    `http://localhost:3000/user/${userId}/performance`
  );

  const { data: activity } = useFetch(
    `http://localhost:3000/user/${userId}/activity`
  );

  return (
    <div className="wrapperUser">
    <div className="userContainer">
      <div className="nameContainer">{user && <Name data={user} />}</div>

      <div className="statsContainer">
        <div className="chartsContainer">
          <div className="container-activity">
            {activity && <DailyActivity data={activity} />}
          </div>

          <div className="container-sessions">
            {session && <SessionTime data={session} />}
            {performance && <RadarCharts data={performance} />}
            {user && <TodayScore data={user} />}
          </div>
        </div>

        <div className="energyContainer">{user && <Energy data={user} />}</div>
      </div>
    </div>
    </div>
  );
};

export default AnalyticsCharts;
