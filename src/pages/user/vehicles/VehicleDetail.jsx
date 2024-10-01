import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { vehiclesData } from "../../../data/data";
import Title from "../../../components/shared/title/Title";
import EditIcon from "../../../assets/svgs/EditIcon";
import ToggleButton from "../../../components/shared/toggle/ToggleButton";

const VehicleDetail = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { id } = useParams();
  const vehicle = vehiclesData.find((vehicle) => vehicle.id === id);
  //   console.log('vehicle', vehicle)
  const handleToggle = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      {!vehicle && <p className="text-base">No vehicle data found..</p>}
      <div className="flex items-center justify-between">
        <div>
          <Title title="Vehicle Detail" />
        </div>
        <div className="cursor-pointer">
          <EditIcon />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
        <div>
          <LabelAndTitle label="Vehicle Name" title={vehicle.vehicleName} />
          <div className="mt-3">
            <LabelAndTitle label="Brand" title={vehicle.brand} />
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-4">
            <LabelAndTitle
              label="License Plate Number"
              title={vehicle.carRegistration}
            />
            <LabelAndTitle
              label="Identification Number"
              title={vehicle.identificationNumber}
            />
            <LabelAndTitle label="Color" title={vehicle.color} />
            <LabelAndTitle label="Assign to" title={vehicle.assignTo} />
            <LabelAndTitle label="Project" title={vehicle.project} />
          </div>
          <div className="mt-6">
            <p className="text-sm text-[#111111cc]">Sensors</p>
            <div className="mt-2 bg-[#7bc0f726] rounded-[7px] p-4 flex items-center justify-between">
                <p className="text-base font-semibold text-[#084984]">Sensor 1</p>
                <ToggleButton isChecked={isChecked} onToggle={handleToggle} />
            </div>
          </div>
        </div>
        <div>
            <img src={vehicle.vehicleImage} className="w-full md:w-[70%] h-[full] object-cover m-auto"/>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;

const LabelAndTitle = ({ label, title }) => {
  return (
    <div>
      <p className="text-sm text-[#111111cc]">{label}</p>
      <h5 className="text-base md:text-md text-[#111111] font-semibold capitalize">
        {title}
      </h5>
    </div>
  );
};
