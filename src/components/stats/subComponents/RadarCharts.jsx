import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Text,
} from "recharts";


const RadarCharts = (performance) => {
  const radarData = performance.data.data;
   console.log(radarData);

  // const radarValue = radarData.data;
  //  console.log(radarValue);


  // const value = radarValue.map((value) => value.value);
  // console.log(value);
  

//   let radarKind = radarData.kind;
// console.log(radarKind);

// radarKind = Array.of("cardio", 'energy', 'endurance', 'vitesse', 'intensité')
// console.log(radarKind);
// const kinds = radarKind.map((kind) => kind);
// console.log(kinds);

// const test = performance.data.data.kind
// console.log(test);


  const DataRadarTitle = radarData.data.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: "Cardio" };
      case 2:
        return { ...data, kind: "Energie" };
      case 3:
        return { ...data, kind: "Endurance" };
      case 4:
        return { ...data, kind: "Force" };
      case 5:
        return { ...data, kind: "Vitesse" };
      case 6:
        return { ...data, kind: "Intensité" };
      default:
        return { ...data };
    }
  });
console.log(DataRadarTitle);

 const value = DataRadarTitle.map((value) => value.value);
 console.log(value);

const kind = DataRadarTitle.map((kind) => kind.kind);
  console.log(kind);


  return (
    <div className="spider-analytics">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={DataRadarTitle}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tick={(props) => renderPolarAngleAxis(props)}
          />
          <Radar
            dataKey="value"
            fill="red"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};;

function renderPolarAngleAxis({ payload, x, y, cx, cy }) {
  return (
    <Text
      verticalAnchor="middle"
      y={y + (y - cy +10) / 8}
      x={x + (x - (cx + 70)) / 3}
      style={{ fill: "rgba(255, 255, 255)", fontSize: 12 }}
    >
      {payload.value}
    </Text>
  );
}
//https://github.com/logic-fabric/sportsee/tree/main/src/components
export default RadarCharts;
