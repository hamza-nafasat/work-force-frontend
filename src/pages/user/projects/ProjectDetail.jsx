import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../../../data/data";
import Title from "../../../components/shared/title/Title";
import EditIcon from "../../../assets/svgs/EditIcon";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === id);
  const displayImages = project.labours.slice(0, 7);
  const extraCount = project.labours.length - displayImages.length;

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Project Detail" />
        </div>
        <div className="cursor-pointer">
          <EditIcon />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
        <div className="lg:col-span-7">
          <p className="text-sm md:text-base text-[#111111cc]">Project Name</p>
          <p className="text-base md:text-lg font-semibold mt-1">
            {project.projectName}
          </p>
          <div className="mt-5 md:mt-8">
            <p className="text-sm md:text-base text-[#111111cc]">Description</p>
            <p className="text-sm text-[#111111] mt-1">
              {project.projectDetail}
            </p>
          </div>
        </div>
        {/* second column */}
        <div className="lg:col-span-5">
          <div className="flex justify-between gap-5">
            <div>
              <p className="text-sm md:text-base text-[#111111cc]">
                Start Date
              </p>
              <p className="text-sm sm:text-base md:text-md font-semibold mt-1">
                {project.startDate}
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base text-[#111111cc]">Due Date</p>
              <p className="text-sm sm:text-base md:text-md font-semibold mt-1">
                {project.dueDate}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-[#111111cc] mt-5 md:mt-8">
            <FaMapMarkerAlt />
            Location
          </div>
          <p className="text-sm sm:text-md lg:text-lg">Taetratech, Lakhpat Road, Lahore</p>
          <p className="text-sm md:text-base text-[#111111cc] mt-5 md:mt-8">
            Labours
          </p>
          <div className="mt-2 flex items-center ml-[10px]">
            {displayImages.map((image, i) => (
              <img
                key={i}
                src={image.image}
                alt="profile"
                className="w-[35px] h-[35px] rounded-full object-cover ml-[-10px]"
              />
            ))}
            {extraCount > 0 && (
              <div className="w-[35px] h-[35px] rounded-full ml-[-10px] flex items-center justify-center bg-[#d3d3d3] font-semibold">
                +{extraCount}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
