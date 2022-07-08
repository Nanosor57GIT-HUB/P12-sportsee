import React from "react";
import BodyHome from "../components/home/BodyHome";
import HeaderHome from "../components/home/HeaderHome";
import { useParams } from "react-router-dom";

const Home = () => {

   const { userId } = useParams();
   console.log(userId);

  
  return (
    <div className="homePage">
      
      <BodyHome />
      <HeaderHome />

    </div>
  );
};

export default Home;
