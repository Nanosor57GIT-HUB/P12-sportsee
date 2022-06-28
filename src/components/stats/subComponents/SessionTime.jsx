import React from 'react';
import {
  Bar,
  LineChart,
  Line,
  XAxis,
  Tooltip,
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
        <LineChart width={250} height={270} data={dataS}>
          <Line type="monotone" dataKey="uv" stroke="#fff" />

          <XAxis dataKey="name" />
          <XAxis dataKey="label" />
          <Tooltip />
          <Bar dataKey="uv" fill="#0000ff" barSize={20} />
        </LineChart>
      </div>
    );
};

export default SessionTime;