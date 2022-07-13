import React from "react";
import Header from "../components/stats/header/Header";
import SideBar from "../components/stats/sideBar/SideBar";
import StatsUser from "../components/stats/statsUser/StatsUser";

/**
 * @description Création du container avec les composants utiles à la page du dashboard statistiques
 * @returns Retourne la page des statistique de chaque user demandé
 */
const Stats = () => {
  return (
    <div className="containerPage">
      <Header />
      <SideBar />
      <StatsUser />
    </div>
  );
};

export default Stats;

//http://localhost:3000/user/${userId}
//http://localhost:3000/user/${userId}/activity
//http://localhost:3000/user/${userId}/average-sessions
//http://localhost:3000/user/${userId}/performance

//https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
