import React from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import StatsUser from '../components/StatsUser';


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