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



const dataB = [
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

    return (
      <div className="daily-activity">
        <p className="titleDailyActivity">Activité quotidiennes</p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={dataB}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" style={{ fill: "#9B9EAC", fontSize: 14 }} />
            {/* tick={false} */}
            <YAxis
              orientation={"right"}
              style={{ fill: "#9B9EAC", fontSize: 14 }}
            />
            <Tooltip orientation={"left"} />
         
            <Legend verticalAlign="top" height={60} align="right" />
            <Bar
              dataKey="Kg"
              fill="#282D30"
              radius={[5, 5, 0, 0]}
              barSize={10}
            />
            <Bar
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