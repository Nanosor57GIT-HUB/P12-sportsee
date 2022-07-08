import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DailyActivity = () => {



const dataD = [
  {
    name: "Day1",
    KCal: 328,
    Kg: 82,
    amt: 2400,
  },
  {
    name: "Day2",
    KCal: 360,
    Kg: 83,
    amt: 2210,
  },
  {
    name: "Day3",
    KCal: 285,
    Kg: 82,
    amt: 2290,
  },
  {
    name: "Day4",
    KCal: 385,
    Kg: 84,
    amt: 2000,
  },
  {
    name: "Day5",
    KCal: 250,
    Kg: 86,
    amt: 2181,
  },
  {
    name: "Day6",
    KCal: 300,
    Kg: 83,
    amt: 2500,
  },
  {
    name: "Day7",
    KCal: 350,
    Kg: 82,
    amt: 2100,
  },
];
/************************************************************ */





function CustomTooltip({ payload, label, KCal, Kg, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="labelDailyActivity">{` ${payload[1].value} KCal`}</p>
        <p className="desc">{` ${payload[0].value} Kg`}</p>
      </div>
    );
  }

  return null;
}
/**************************************************************** */
    return (
      <div className="daily-activity">
        <p className="titleDailyActivity">Activité quotidiennes</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataD}
            margin={{
              top: 15,
              right: 0,
              left: 25,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" style={{ fill: "#9B9EAC", fontSize: 14 }} />
            <YAxis
              orientation={"right"}
              style={{ fill: "#9B9EAC", fontSize: 14 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={50}
              align="right"
              iconType="circle"
              iconSize={10}
            />
            <Bar
              name="Calories brûlées (KCal)"
              dataKey="Kg"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
              barSize={10}
            />
            <Bar
              name="Poids (Kg)"
              dataKey="KCal"
              fill="#E60000"
              radius={[5, 5, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
};

export default DailyActivity;

//https://stackoverflow.com/questions/44413185/custom-legend-labels-in-my-rechart-chart