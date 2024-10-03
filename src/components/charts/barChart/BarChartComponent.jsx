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
  LabelList,
} from "recharts";

const BarChartComponent = ({
  data = [],
  colors = { start: "#0d59a1", end: "#0f88f799" },
  barSize = 40,
  gradientID = "colorUv",
}) => {
  // console.log("gradientID:", gradientID);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        // width={1500}
        // height={400}
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: -20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient
            id={gradientID ? gradientID : "colorUv"}
            x1="1"
            y1="1"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor={colors ? colors.start : "#0d59a1"} />
            <stop offset="100%" stopColor={colors ? colors.end : "#0f88f799"} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tick={{ fontSize: "12px" }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: "12px" }} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="uv"
          fill={`url(#${gradientID ? gradientID : "colorUv"})`}
          barSize={barSize ? barSize : 40}
        >
          <LabelList dataKey="uv" position="top" style={{ fontSize: "10px" }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
