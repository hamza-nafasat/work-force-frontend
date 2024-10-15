import React from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Button from '../../../components/shared/button/Button'

const EditAlert = ({ onClose }) => {
  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Dropdown
          defaultText="Select Alert Type"
          options={[
            { option: "Damage", value: "damage" },
            { option: "Infence", value: "infence" },
            { option: "Offline", value: "offline" },
          ]}
        />
      </div>
      <div>
        <Dropdown
          defaultText="Select Severity Type"
          options={[
            { option: "High", value: "high" },
            { option: "Medium", value: "medium" },
            { option: "Low", value: "low" },
          ]}
        />
      </div>
      <div>
        <Dropdown
          defaultText="Select Status"
          options={[
            { option: "Enable", value: "enable" },
            { option: "Disable", value: "disable" },
          ]}
        />
      </div>
      <div className="lg:col-span-2 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm md:text-base font-semibold">Notification Type</p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-sm md:text-base cursor-pointer">
            <input type="radio" name="notificationType" />
            Email
          </label>
          <label className="flex items-center gap-1 text-sm md:text-base cursor-pointer">
            <input type="radio" name="notificationType" />
            Platform
          </label>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-end gap-2 mt-4 md:mt-5">
        <Button
          text="Cancel"
          color="#111111b3"
          bg="#76767640"
          width="w-[150px]"
          height="h-[50px]"
          onClick={onClose}
        />
        <Button
          type="submit"
          text="Save"
          width="w-[150px]"
          height="h-[50px]"
        />
      </div>
    </form>
  );
};

export default EditAlert;
