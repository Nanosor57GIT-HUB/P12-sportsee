import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const TodayScore = (user) => {
//console.log(user);
  const dataScore = user.data;
  
  const data = dataScore.data;
  

    const scoreData = data.todayScore * 100  || data.score * 100  ;
   // console.log(scoreData);

  const data01 = [
    {
      name: "A1",
      uv: scoreData ,
      pv: 2400,
      fill: "red",
    },
    {
      name: "100",
      uv: 100,
      pv: 4567,
      fill: "#FBFBFB",
    },
  ];

  return (
    <div className="objective-score">
      <p className="titleScore">Score</p>
      <p className="tauxObjectif">
        <span style={{ fontWeight: 700 }}>{scoreData}%</span> de votre
        objectif
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={730}
          height={250}
          innerRadius={80}
          outerRadius={100}
          data={data01}
          startAngle={90}
          endAngle={-270}
        >
          <RadialBar
            dataKey="uv"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayScore;