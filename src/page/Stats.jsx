import React from "react";
import Header from "../components/stats/Header";
import SideBar from "../components/stats/SideBar";
import UseFetch from "../components/UseFetch";
import StatsUser from "../components/stats/StatsUser";
import { useParams } from "react-router-dom";
import UseService from "../components/UseService";





const Stats = () => {

  const { userId } = useParams(); 

  const {
    data,
    error,
    isLoading,
  } = UseFetch(`http://localhost:3000/user/${userId}`);
  
  
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
<UseService/>
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