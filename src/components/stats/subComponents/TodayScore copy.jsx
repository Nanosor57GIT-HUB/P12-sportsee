import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const TodayScore = (props) => {

      const datas = props.data;
      //  console.log(datas);
      const data = datas.data;
      // console.log(data);

      let data3 = data.todayScore;
      console.log(data3);
      let data4 = data.score;
      console.log(data4);
     

const data01 = [
  { name: "A1", value: data3 }
];

    return (
      <div className="objective-score">
        <p className="titleScore">Score</p>
        <p className="tauxObjectif">
          <span style={{ fontWeight: 700 }}>{data3 *100}%</span> de votre objectif
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={90}
              endAngle={0}
              data={data01}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={95}
              fill="red"
              cornerRadius={50}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* {data3} */}
        {data4}
      </div>
    );
};

export default TodayScore;