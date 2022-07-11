import React from "react";
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

/**
 * Création d'un graphisme d'activité quotidienne avec recharts
 * @param {data} activity
 * @returns Retourne un graphisme d'activité quotidienne avec les données d'une API
 */
const DailyActivity = (activity) => {
  const activityData = activity.data.data;
  const activitySessions = activityData.sessions;

  /**
   * Conversion des datas "Dates" en jour sur une semaine
   */
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

  /**
   * conversion des unités d'energie
   * @param {number} C
   * @returns Retourne les valeurs converties(calories => KCal) dans les barres de résultat
   */
  let Kcal = (C) => {
    return C.calories / 1000;
  };

  /**
   * Conversion des unités de poids
   * @param {number} W
   * @returns Retourne les valeurs converties dans les barres de résultat
   */
  let Kg = (W) => {
    return W.kilogram / 1000;
  };

  /**
   * Création d'une info-bulle personnalisée
   * @param {info-bulle} param0
   * @returns Retourne les valeurs converties et les dénominations dans l'info-bulle
   */
  function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="labelDailyActivity">{`${payload[1].value} KCal`}</p>

          <p className="desc">{` ${payload[0].value * 1000} Kg`}</p>
        </div>
      );
    }
    return null;
  }

  /**
   * Création d'une function pour adapter la couleur de remplacement
   * @param {number} value
   * @returns Retourne la couleur voulue sur les textes dans la légende
   */
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
