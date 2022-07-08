import React from "react";
import Header from "../components/stats/Header";
import SideBar from "../components/stats/SideBar";
import useFetch from "../components/useFetch";
import StatsUser from "../components/stats/StatsUser";
import { useParams } from "react-router-dom";





const Stats = () => {

  const {userId} = useParams();

 const { data, error, isLoading } = useFetch(
   `http://localhost:3000/user/${userId}/`
 );
  
  return (
    <div className="containerPage">
      <Header />
      <SideBar />
      
      {isLoading && <div className="loading">Chargement en cours ...</div>}
      {error && (
        <div className="error">
          Désolé, une erreur est survenue pendant le chargement ...
        </div>
      )}

      {data && <StatsUser data={data} />}
      
    </div>
  );
};

export default Stats;

//http://localhost:3000/user/${userId}
//http://localhost:3000/user/${userId}/activity
//http://localhost:3000/user/${userId}/average-sessions
//http://localhost:3000/user/${userId}/performance


//https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
//https://youtu.be/e-hH84YyAWQ   (charts)