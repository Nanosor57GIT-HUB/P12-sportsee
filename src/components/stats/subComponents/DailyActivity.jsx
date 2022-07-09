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

const DailyActivity = (activity) => {
  const activityData = activity.data.data;
  const activitySessions = activityData.sessions;

   const dayActivity = activitySessions.map((data) => {
     switch (new Date(data.day).getDate()) {
       case 1:
         return { ...data, day: "1" };
       case 2:
         return { ...data, day: "2" };
       case 3:
         return { ...data, day: "3" };
       case 4:
         return { ...data, day: "4" };
       case 5:
         return { ...data, day: "5" };
       case 6:
         return { ...data, day: "6" };
       case 7:
         return { ...data, day: "7" };
       default:
         return { ...data };
     }
     
   });

let Kcal = (x) =>{return x.calories /1000 }
let Kg = (w) => {return w.kilogram /1000 };
  
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="labelDailyActivity">{`${payload[1].value} KCal`}</p>
            
          
          <p className="desc">{` ${payload[0].value *1000} Kg`}</p>
        </div>
      );
    }
    return null;
  };

  const renderColorfulLegendText = (value) => {
    return <span style={{ color: "#74798C" }}>{value}</span>;
  };
  
  return (
    <div className="daily-activity">
      <p className="titleDailyActivity">Activité quotidienne</p>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={dayActivity}
          margin={{
            top: 15,
            right: 0,
            left: 25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" style={{ fill: "#9B9EAC", fontSize: 14 }} />
          <YAxis
            orientation={"right"}
            dataKey={Kcal}
            //ticks={[0, 0.3, 0.6]}
            style={{ fill: "#9B9EAC", fontSize: 14 }}
            tickCount="3"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={90}
            align="right"
            iconType="circle"
            iconSize={10}
            formatter={renderColorfulLegendText}
            //"#74798C"
          />
          <Bar
            name="Poids (Kg)"
            dataKey={Kg}
            fill="#282D30"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
          <Bar
            name="Calories brûlées (KCal)"
            dataKey={Kcal}
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

