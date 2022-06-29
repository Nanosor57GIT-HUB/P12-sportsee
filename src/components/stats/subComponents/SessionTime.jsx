import React from 'react';
import {
  Bar,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";


const SessionTime = (props) => {






    const dataS = [
      { name: "L", uv: 550, pv: 2400, amt: 2400 },
      { name: "M", uv: 400, pv: 2400, amt: 2400 },
      { name: "M", uv: 300, pv: 2400, amt: 2400 },
      { name: "J", uv: 350, pv: 2400, amt: 2400 },
      { name: "V", uv: 100, pv: 2400, amt: 2400 },
      { name: "S", uv: 200, pv: 2400, amt: 2400 },
      { name: "D", uv: 200, pv: 2400, amt: 2400 }
    ];


    return (
      <div className="average-duration">
        <p className="titleSessionTime">Durée moyenne des sessions</p>
        <ResponsiveContainer width="95%" height="80%">
          <LineChart
            width="{220}"
            height={200}
            data={dataS}
            margin={{
              
              right: 5,
              left: 10,
             bottom: 15
            }}
          >
            <Line type="monotone" dataKey="uv" stroke="#fff" />
            <XAxis dataKey="name" style={{ fill: "#fff", opacity: 0.5 }} />
            <Tooltip cursor={{ stroke: "#fff" }} />
            <Bar dataKey="uv" barSize={10} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
};

export default SessionTime;