/* eslint-disable react/prop-types */
import Input from "../../../../components/auth/Input";
import Dropdown from "../../../../components/shared/dropdown/Dropdown";

const FenceForm = ({ fenceData, setFenceData }) => {
  return (
    <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-6">
        <Input
          type="text"
          label="Name"
          labelWeight="font-semibold"
          placeholder="Geofence name"
          value={fenceData.name}
          onChange={(e) => setFenceData({ ...fenceData, name: e.target.value })}
        />
      </div>

      <div className="lg:col-span-6">
        <Input
          type="date"
          label="Start Date"
          labelWeight="font-semibold"
          value={fenceData.startDate}
          onChange={(e) => setFenceData({ ...fenceData, startDate: e.target.value })}
        />
      </div>

      <div className="lg:col-span-6">
        <Input
          type="date"
          label="Due Date"
          labelWeight="font-semibold"
          value={fenceData.dueDate}
          onChange={(e) => setFenceData({ ...fenceData, dueDate: e.target.value })}
        />
      </div>

      <div className="lg:col-span-6">
        <Dropdown
          options={[
            { option: "Infence", value: "in-fence" },
            { option: "Outfence", value: "out-fence" },
          ]}
          label="Alert Type"
          labelWeight="font-[600]"
          value={fenceData.alertType}
          onSelect={(value) => setFenceData({ ...fenceData, alertType: value })}
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
          value={fenceData.status}
          onSelect={(value) => setFenceData({ ...fenceData, status: value })}
        />
      </div>
    </div>
  );
};

export default FenceForm;
