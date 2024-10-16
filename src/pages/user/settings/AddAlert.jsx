/* eslint-disable react/prop-types */
import { useState } from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Button from "../../../components/shared/button/Button";
import { toast } from "react-toastify";
import { useAddAlertMutation } from "../../../redux/api/alertApi";

const AddAlert = ({ onClose, refetch }) => {
  const [addAlert, { isLoading }] = useAddAlertMutation();
  const [form, setForm] = useState({
    type: "",
    severity: "",
    status: "",
    platform: "",
  });

  const addAlertHandler = async (e) => {
    console.log("Form Values: ", form);
    e.preventDefault();
    try {
      if (!form.type || !form.severity || !form.status || !form.platform) {
        return toast.error("Please Provide all fields");
      }
      const response = await addAlert(form).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        await refetch();
        onClose();
      }
    } catch (error) {
      console.log("Error while adding alert", error);
      toast.error(error?.data?.message || "Error while adding alert");
    }
  };

  const handleNotificationType = (e) => {
    const selectedType = e.target.value;
    setForm({
      ...form,
      platform: selectedType === "email" ? "email" : "web",
    });
  };

  return (
    <form onSubmit={addAlertHandler} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Dropdown
          defaultText="Select Alert Type"
          options={[
            { option: "Damage", value: "damage" },
            { option: "Infence", value: "infence" },
            { option: "Offline", value: "offline" },
          ]}
          onSelect={(select) => setForm({ ...form, type: select })}
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
          onSelect={(select) => setForm({ ...form, severity: select })}
        />
      </div>
      <div>
        <Dropdown
          defaultText="Select Status"
          options={[
            { option: "Enable", value: "enable" },
            { option: "Disable", value: "disable" },
          ]}
          onSelect={(select) => setForm({ ...form, status: select })}
        />
      </div>
      <div className="lg:col-span-2 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm md:text-base font-semibold">Notification Type</p>
        <div className="flex items-center gap-4 select-none">
          <label className="flex items-center gap-1 text-sm md:text-base cursor-pointer">
            <input type="radio" name="notificationType" value="email" onChange={handleNotificationType} />
            Email
          </label>
          <label className="flex items-center gap-1 text-sm md:text-base cursor-pointer">
            <input type="radio" name="notificationType" value="web" onChange={handleNotificationType} />
            Web
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
        <Button disabled={isLoading} type="submit" text="Save" width="w-[150px]" height="h-[50px]" />
      </div>
    </form>
  );
};

export default AddAlert;
