import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const SessionTime = (session) => {

 const dataSession = session.data.data
// console.log(dataSession);

 const sessionTime = dataSession.sessions
// console.log(sessionTime);

 const idSession = dataSession.userId
// console.log(idSession);


    const dataS = [
      { name: "L", Min: 90, pv: 2400, amt: 2400 },
      { name: "M", Min: 65, pv: 2400, amt: 2400 },
      { name: "M", Min: 180, pv: 2400, amt: 2400 },
      { name: "J", Min: 45, pv: 2400, amt: 2400 },
      { name: "V", Min: 30, pv: 2400, amt: 2400 },
      { name: "S", Min: 80, pv: 2400, amt: 2400 },
      { name: "D", Min: 20, pv: 2400, amt: 2400 }
    ];

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="labelSession">
          {payload[0].value}
          <span> min</span>
        </p>
      </div>
    );
  }
  return null;
}



    return (
      <div className="average-duration">
        <p className="titleSessionTime">Durée moyenne des sessions</p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dataS}
            margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
          >
            <XAxis
              dataKey="name"
              stroke="rgba(255, 255, 255, 0.6)"
              axisLine={false}
              dy={10}
              tickLine={false}
              tick={{
                fontSize: 12,
                fontWeight: 500,
              }}
            />
            <YAxis
              dataKey="Min"
              domain={[0, "dataMax + 90"]}
              hide={true}
            />
            <Line
              dataKey="Min"
              type={"monotone"}
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "rgba(255,255,255, 0.6)",
                strokeWidth: 10,
                r: 5,
              }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "rgba(0, 0, 0, 0.1)",
                strokeWidth: 32,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

     
  
export default SessionTime;
