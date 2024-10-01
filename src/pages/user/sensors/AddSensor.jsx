import React from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "../../../components/shared/button/Button";

const AddSensor = ({onClose}) => {
  const topicSelectHander = (option) => console.log(option);
  const portSelectHander = (option) => console.log(option);
  return (
    <form className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8">
        <Input
          type="text"
          label="Sensor Name"
          labelWeight="font-semibold"
          placeholder="Temperature Sensor 01"
        />
      </div>
      <div className="lg:col-span-4">
        <Label label="Topic" />
        <Dropdown
          options={[{ option: "Temperature" }, { option: "Humidity" }]}
          onSelect={topicSelectHander}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="IP"
          labelWeight="font-semibold"
          placeholder="192.168.1.1"
        />
      </div>
      <div className="lg:col-span-6">
        <Label label="Port" />
        <Dropdown
          options={[{ option: "8080" }, { option: "6766" }]}
          onSelect={portSelectHander}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="URL"
          labelWeight="font-semibold"
          placeholder="http://example.com/sensors"
        />
      </div>
      <div className="lg:col-span-6">
        <div className="relative">
          <Input
            label="Location"
            labelWeight="font-semibold"
            type="text"
            placeholder="Warehouse A"
            height="h-[50px] md:h-[60px]"
          />
          <div className="absolute right-2 lg:right-5 bottom-[25%]">
            <FaMapMarkerAlt />
          </div>
        </div>
      </div>
      <div className="lg:col-span-12 mt-4">
          <div className="flex items-center justify-end gap-2">
            <Button text='Cancel' color="#111111b3" bg="#76767640" width="w-[150px]" onClick={onClose} />
            <Button text='Add' width="w-[150px]" />
          </div>
        </div>
    </form>
  );
};

export default AddSensor;

const Label = ({ label }) => (
  <label className="text-[#000] text-sm sm:text-base mb-2 block font-semibold">{label}</label>
);
