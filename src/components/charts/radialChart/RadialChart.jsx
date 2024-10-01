import React from "react";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const RadialChart = ({
  data,
  width = 250,
  height = 250,
  innerRadius = 50,
  outerRadius = 120,
  barSize = 11,
}) => {
  return (
    <>
      <div className="my-4 md:my-8">
        <RadialBarChart
          width={width}
          height={height}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          barSize={barSize}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Tooltip />
        </RadialBarChart>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {data.map((entry, i) => (
          <div className="flex items-center gap-1" key={i}>
            <div
              className="w-[15px] h-[15px] rounded-[5px]"
              style={{ background: entry.fill }}
            ></div>
            <p className="text-sm text-[#030229]">
              {entry.name}{" "}
              <span className="text-sm font-semibold">{entry.value}%</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadialChart;
