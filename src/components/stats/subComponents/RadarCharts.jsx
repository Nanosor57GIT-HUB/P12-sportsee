import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";


const RadarCharts = (performance) => {
 
  const radarData = performance.data.data
  console.log(radarData);

  const radarKind = radarData.kind
  console.log(radarKind);

  const radarValue = radarData.data
  console.log(radarValue);


const dataR = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];



    return (
      <div className="spider-analytics">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={dataR}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" stroke='white' />
            
            <Radar
              name="Mike"
              dataKey="A"
              // stroke="#8884d8"
              fill="red"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
};
//https://github.com/logic-fabric/sportsee/tree/main/src/components
export default RadarCharts;
