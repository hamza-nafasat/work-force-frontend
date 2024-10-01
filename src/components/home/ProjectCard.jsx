import React from "react";
import profileImg from "../../assets/images/header/profilepic.webp";
import CircularProgressBar from "./CircularProgressBar";
import { getRandomColor } from "../../utils";

const ProjectCard = ({
  title,
  images,
  startDate,
  endDate,
  percentage,
  progressColor,
}) => {
  const displayImages = images.slice(0,4);
  const extraCount = images.length - displayImages.length;
  const borderColor = getRandomColor()
  return (
    <>
      <div className="bg-white px-4 md:px-6 xl:px-8 pt-4 md:pt-[20px] pb-4 md:pb-6 xl:pb-8 shadow-md rounded-[12px] border-l-[12px] mb-4" style={{borderColor: `${borderColor}`}}>
        <h4 className="text-base md:text-[20px] text-[#000] font-semibold">
          {title}
        </h4>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
          <div>
            <div className="flex items-center">
              {displayImages.map((img, i) => (
                <img
                  src={img}
                  key={i}
                  className="w-[40px] h-[40px] rounded-full object-cover ml-[-0.5rem]"
                  alt="profile-pic"
                />
              ))}
              <div className="w-[40px] h-[40px] rounded-full bg-[#d3d3d3] ml-[-0.5rem] text-base font-semibold text-[#000] flex items-center justify-center">
                {extraCount}+
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 justify-between mt-4">
              <div className="flex flex-col">
                <p className="text-sm text-[#00000099]">Start Date:</p>
                <p className="text-sm md:text-[18px] font-medium md:font-semibold text-[#000]">
                  {startDate}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-[#00000099]">expected Due Date:</p>
                <p className="text-sm md:text-[18px] font-medium md:font-semibold text-[#000]">
                  {endDate}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-items-center gap-1">
            <CircularProgressBar percentage={percentage} color={progressColor} />
            <p className="text-[10px] text-[#407bff]">Workforce Count</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
