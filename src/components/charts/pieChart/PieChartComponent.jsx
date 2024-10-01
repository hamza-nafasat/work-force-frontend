import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const PieChartComponent = ({
  data,
  layout,
  centerIcon,
  innerRadius = 55,
  outerRadius = 85,
  paddingAngle = 4,
  cornerRadius = 7,
}) => {
  const maxValue = Math.max(...data.map(entry => entry.value))
  const maxValueFiltered = data.find(entry => entry.value === maxValue)
  console.log('maxvalue', maxValue)
  console.log('maxvaluefilter', maxValueFiltered)
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div
          className="relative w-[257px]"
          style={{ height: layout === "layout-one" ? "257px" : "180px" }}
        >
          <ResponsiveContainer width="100%" height={"100%"}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                cornerRadius={cornerRadius}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                paddingAngle={paddingAngle}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {layout === "layout-one" ? (
              centerIcon
            ) : layout === 'center-percentage' ? (
              <div className="flex flex-col items-center">
                <p className="text-primary text-lg md:text-[28px] font-bold leading-none">
                  {maxValueFiltered?.value}
                  {centerIcon}
                </p>
                <p className="text-base font-medium leading-none">Score</p>
              </div>
            ):null}
          </div>
        </div>
        <div className="mt-6">
          {layout === "layout-one" ? (
            data.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-[#0b60ae12] p-3 rounded-lg mb-2 w-64"
              >
                <div className="flex items-center">
                  <div
                    className="w-[22px] h-[22px] sm:w-[32px] sm:h-[32px] rounded-[5px] mr-2"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm sm:text-base font-semibold">{entry.name}</span>
                </div>
                <span className="font-semibold text-base sm:text-[20px]">{entry.value}</span>
              </div>
            ))
          ) : layout === 'layout-two' ? (
            <div className="flex flex-wrap items-center justify-between gap-3">
              {data.map((entry, i) => (
                <div className="flex items-center gap-1" key={i}>
                  <div
                    className="w-[15px] h-[15px] rounded-[5px]"
                    style={{ background: entry.color }}
                  ></div>
                  <p className="text-sm text-[#030229]">
                    {entry.name}{" "}
                    <span className="text-sm font-semibold">
                      {entry.value}%
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ):null}
        </div>
      </div>
    </>
  );
};

export default PieChartComponent;
