import React from "react";
import Input from "../../../../components/auth/Input";

const FenceForm = () => {
  return (
    <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Group"
          labelWeight="font-semibold"
          placeholder="Customer Test"
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Geofence Name"
          labelWeight="font-semibold"
          placeholder="Customer Test"
        />
      </div>
      <div className="lg:col-span-6">
        <Input type="date" label="Start Date" labelWeight="font-semibold" />
      </div>
      <div className="lg:col-span-6">
        <Input type="date" label="Due Date" labelWeight="font-semibold" />
      </div>
      <div className="lg:col-span-6 flex items-center justify-between">
        <Label label="Alert " />
        <div className="flex items-center gap-4 md:gap-8">
          <label className="text-[#000] text-sm md:text-base mb-2 block font-semibold">
            <input type="radio" name="fence" value="in-fence" /> In-Fence
          </label>
          <label className="text-[#000] text-sm md:text-base mb-2 block font-semibold">
            <input type="radio" name="fence" value="out-fence" /> Out-InFence
          </label>
        </div>
      </div>
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Remarks"
          labelWeight="font-semibold"
          placeholder="Input Remarks "
        />
      </div>
    </div>
  );
};

export default FenceForm;

const Label = ({ label }) => {
  return (
    <label className="text-[#000] text-sm md:text-base mb-2 block font-semibold">
      {label}
    </label>
  );
};
