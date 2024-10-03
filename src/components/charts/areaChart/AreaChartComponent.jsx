import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const AreaChartComponent = ({ data, dataKey="value", color, type, height = 60 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, bottom: -10, left: -35 }}
      >
        {type === "adminSideWidget" ? null : (
          <defs>
            <linearGradient
              id={`colorGradient-${color}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor={color}
                stopOpacity={type === "adminSide" ? 0.5 : 0.9}
              />
              <stop
                offset="95%"
                stopColor={color}
                stopOpacity={type === "adminSide" ? 0.05 : 0.4}
              />
            </linearGradient>
          </defs>
        )}
        {type === "adminSide" && (
          <>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fill: "#B4B2B7" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#B4B2B7" }}
              axisLine={false}
              tickLine={false}
              domain={[0, "dataMax + 40"]}
            />
          </>
        )}
        <Tooltip />
        <Area
          type={type === "adminSide" ? "linear" : "monotone"}
          dataKey={dataKey}
          stroke={color}
          fillOpacity={1}
          fill={`url(#colorGradient-${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
