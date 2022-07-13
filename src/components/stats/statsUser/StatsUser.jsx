import React from "react";
import Name from "./Name";
import DailyActivity from "./DailyActivity";
import RadarCharts from "./RadarCharts";
import SessionTime from "./SessionTime";
import TodayScore from "./TodayScore";
import Energy from "./Energy";
import useFetch from "../../../service/useFetchService";
import { useParams } from "react-router-dom";

/**
 * @description Mise en place du service d'appel de l'api
 * @const {object} userId Renvoie un objet des paramètres dynamiques de l'URL
 * @const {array} user Rtourne le tableau utilisateur
 * @const {array} session retourne le tableau average session
 * @const {array} performance retourne le tableau performance
 * @const {array} activity retourne le tableau activity
 * @returns L'appel de chaque adresse de l'api
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
  );
};

export default AnalyticsCharts;
