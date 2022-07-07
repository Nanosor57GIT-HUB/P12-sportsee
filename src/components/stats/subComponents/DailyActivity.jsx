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

//taVariable.toLocaleString('en-US')
const DailyActivity = (activity) => {
  const activityData = activity.data.data;
//  console.log(activityData);

  const activitySessions = activityData.sessions;
  console.log(activitySessions);

  const calories = activitySessions.map((c) => c.calories / 1000)
console.log(calories);







  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="labelDailyActivity">{` ${payload[1].value /1000 } KCal`}</p>
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
          data={activitySessions}
          margin={{
            top: 15,
            right: 0,
            left: 25,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
          
            dataKey="day"
            
            // axisLine= {false} 
            style={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis
            orientation={"right"}
            style={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            height={90}
            align="right"
            iconType="circle"
            iconSize={10}
          />
          <Bar
            name="Poids (Kg)"
            dataKey="kilogram"
            fill="#282D30"
            radius={[5, 5, 0, 0]}
            barSize={10}
          />
          <Bar
            name="Calories brûlées (KCal)"
            dataKey="calories"
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

