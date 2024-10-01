import React from "react";

const CircularDonutChart = ({ data }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
  
    const assignedData = data.find(entry => entry.name === "Assigned");
    const unassignedData = data.find(entry => entry.name === "Unassigned");
  
    const assignedPercentage = assignedData ? assignedData.value : 0;
    const unassignedPercentage = unassignedData ? unassignedData.value : 0;
  
    const assignedOffset = circumference - (assignedPercentage / 100) * circumference;
    const unassignedOffset = circumference - (unassignedPercentage / 100) * circumference;
  
    return (
      <>
        <div className="relative w-[210px] h-[210px]">
          <svg
            viewBox="0 0 120 120"
            className="transform rotate-[-90deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[210px] h-[210px] transition-all duration-500"
          >
            <circle
              className="text-[#e9ebf3]"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
            <circle
              className="text-green-500"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeDashoffset={assignedOffset}
              strokeLinecap="round"
              stroke={assignedData.color}
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
          </svg>
          <svg
            viewBox="0 0 120 120"
            className="transform rotate-[-90deg] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[175px] h-[175px]"
          >
            <circle
              className="text-[#e9ebf3]"
              strokeWidth="7"
              stroke="currentColor"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
            <circle
              className="text-green-800"
              strokeWidth="7"
              strokeDasharray={circumference}
              strokeDashoffset={unassignedOffset}
              strokeLinecap="round"
              stroke={unassignedData.color}
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
          </svg>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-2">
          {data.map((entry, i) => (
            <div className="flex items-center gap-1" key={i}>
              <div
                className="w-[15px] h-[15px] rounded-[5px]"
                style={{ background: entry.color }}
              ></div>
              <p className="text-sm text-[#030229]">
                {entry.name}{" "}
                <span className="text-base font-semibold">{entry.value}%</span>
              </p>
            </div>
          ))}
        </div>
      </>
    );
  };
  

export default CircularDonutChart;
