import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

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
   {
     name: "A1",
     uv: data3 * 100,
     pv: 2400,
     fill: "red",
   },
   {
     name: "100",
     uv: 100,
     pv: 4567,
     fill: "#FBFBFB",
   },
 ];


    return (
      <div className="objective-score">
        <p className="titleScore">Score</p>
        <p className="tauxObjectif">
          <span style={{ fontWeight: 700 }}>{data3 * 100}%</span> de votre
          objectif
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            width={730}
            height={250}
            innerRadius={80}
            outerRadius={100}
            data={data01}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              style={{ background: "#fbfbfb" }}
              dataKey="uv"
              cornerRadius={50}
            />
          
          </RadialBarChart>
        </ResponsiveContainer>

        {/* {data3} */}
        {data4}
      </div>
    );
};

export default TodayScore;