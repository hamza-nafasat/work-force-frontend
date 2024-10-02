import React from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Input from "../../../components/auth/Input";
import Button from "../../../components/shared/button/Button";

const AddNewScorecard = ({ onClose }) => {
  const violationNameSelect = (option) => console.log(option);
  return (
    <form className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8">
        <Label label="Violation Name" />
        <Dropdown
          onSelect={violationNameSelect}
          options={[
            { option: "Lost Badge" },
            { option: "Use Someone Else Vehicle" },
          ]}
        /> 
      </div>
      <div className="lg:col-span-4">
        <Label label="Violation Category" />
        <Dropdown
          onSelect={violationNameSelect}
          options={[
            { option: "Workforces" },
            { option: "Vehicles" },
            { option: "Visitors" },
          ]}
        />
      </div>
      <div className="lg:col-span-12">
        <Input type='text' label='Score Points' placeholder='10' labelWeight='font-semibold' />
        <p className="text-sm text-primary mt-[-10px]">Current Total Score 60</p>
        <p className="text-sm text-[#00000099]">The violation Score Total for Workforces Category Should be &lt; 100</p>
      </div>
      <div className="lg:col-span-12">
        <Input type='text' label='Details' placeholder='Add more details' labelWeight='font-semibold' />
      </div>
      <div className="lg:col-span-12">
        <div className="flex items-center justify-end gap-2">
          <Button
            text="Cancel"
            color="#111111b3"
            bg="#76767640"
            width="w-[150px]"
            onClick={onClose}
            height="h-[45px] md:h-[60px]"
          />
          <Button type='submit' text="Add" width="w-[150px]" height="h-[45px] md:h-[60px]" />
        </div>
      </div>
    </form>
  );
};

export default AddNewScorecard;

const Label = ({ label }) => {
  return (
    <label className={`text-[#000] text-sm sm:text-base mb-2 block font-semibold`}>
      {label}
    </label>
  );
};
