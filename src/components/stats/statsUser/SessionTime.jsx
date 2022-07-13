import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * @description
 * @param {*} session 
 * @returns 
 */
const SessionTime = (session) => {
  const dataSession = session.data.data;
  const sessionTime = dataSession.sessions;

 /**
  * 
  */
  let days = sessionTime.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: "L" };
      case 2:
        return { ...data, day: "M" };
      case 3:
        return { ...data, day: "M" };
      case 4:
        return { ...data, day: "J" };
      case 5:
        return { ...data, day: "V" };
      case 6:
        return { ...data, day: "S" };
      case 7:
        return { ...data, day: "D" };
      default:
        return { ...data };
    }
  });

  /**
   *
   * @param {*} param0
   * @returns Retourne la customisation de l
   */
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
      <div className="average-duration-bgc"></div>
      <p className="titleSessionTime">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={days}
          margin={{ top: 0, right: 16, bottom: 24, left: 16 }}
        >
          <XAxis
            dataKey="day"
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
            dataKey="sessionLength"
            domain={[-10, "dataMax + 40"]}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            type={"monotone"}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            active
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 16,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              //   stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 0, //32
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionTime;
