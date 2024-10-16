import React, { useState, useEffect } from "react";
import Input from "../../../../components/auth/Input";
import Dropdown from "../../../../components/shared/dropdown/Dropdown";

const FenceForm = ({ onFormChange }) => {
  const [geofenceName, setGeofenceName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [fenceType, setFenceType] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    onFormChange({
      geofenceName,
      startDate,
      dueDate,
      fenceType,
      status,
    });
  }, [geofenceName, startDate, dueDate, fenceType, status, onFormChange]);

  return (
    <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Geofence Name"
          labelWeight="font-semibold"
          placeholder="Geofence name"
          value={geofenceName}
          onChange={(e) => setGeofenceName(e.target.value)}
        />
      </div>

      <div className="lg:col-span-6">
        <Input
          type="date"
          label="Start Date"
          labelWeight="font-semibold"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="lg:col-span-6">
        <Input
          type="date"
          label="Due Date"
          labelWeight="font-semibold"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="lg:col-span-6">
        <Dropdown
          options={[
            { option: "Infence", value: "infence" },
            { option: "Out-infence", value: "out-infence" },
          ]}
          label="Type"
          labelWeight="font-[600]"
          value={fenceType}
          onSelect={(value) => setFenceType(value)}
        />
      </div>

      <div className="lg:col-span-6">
        <Dropdown
          options={[
            { option: "Enable", value: "enable" },
            { option: "Disable", value: "disable" },
          ]}
          label="Status"
          labelWeight="font-[600]"
          value={status}
          onSelect={(value) => setStatus(value)}
        />
      </div>
    </div>
  );
};

export default FenceForm;
