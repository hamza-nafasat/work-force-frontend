import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

const DonutChart = ({ data }) => {
  const categories = [...new Set(data.map(entry => entry.name))];
  
  const getPieProps = (index) => ({
    cx: "50%",
    cy: "50%",
    innerRadius: 60 - index * 20,
    outerRadius: 85 - index * 20,
    fill: "#8884d8",
    paddingAngle: 5,
    dataKey: "value",
    labelLine: false,
    startAngle: 90,
    endAngle: -90 - (index * 360 / categories.length)
  });

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        {categories.map((category, index) => {
          const categoryData = data.filter(entry => entry.name === category);
          
          return (
            <Pie
              key={`pie-${index}`}
              data={categoryData}
              {...getPieProps(index)}
            >
              {categoryData.map((entry, cellIndex) => (
                <React.Fragment key={`cell-${cellIndex}`}>
                  <Cell fill={entry.color} />
                  <Label
                    value={`${entry.value}%`}
                    position={"insideTopRight"}
                    fill="#fff"
                    fontSize={'10px'}
                  />
                </React.Fragment>
              ))}
            </Pie>
          );
        })}
        <Tooltip />
      </PieChart>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {data.map((entry, i) => (
          <div className="flex items-center gap-1" key={i}>
            <div
              className="w-[15px] h-[15px] rounded-[5px]"
              style={{ background: entry.color }}
            ></div>
            <p className="text-sm text-[#030229]">
              {entry.name}{" "}
              <span className="text-base font-semibold">
                {entry.value}%
              </span>
            </p>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  );
};

export default DonutChart;
