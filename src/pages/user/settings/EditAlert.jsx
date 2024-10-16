/* eslint-disable react/prop-types */
import React from "react";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Button from "../../../components/shared/button/Button";
import { toast } from "react-toastify";
import { useUpdateAlertMutation } from "../../../redux/api/alertApi";

const EditAlert = ({ onClose, selectedAlert, refetch }) => {
  const [updateAlert, { isLoading }] = useUpdateAlertMutation();
  const [form, setForm] = React.useState({
    type: selectedAlert.type,
    severity: selectedAlert.severity,
    status: selectedAlert.status,
    platform: selectedAlert.platform,
  });

  const updateAlertHandler = async (e) => {
    e.preventDefault();
    try {
      if (!form.type && !form.severity && !form.status && !form.platform) {
        return toast.error("Please Provide all fields");
      }
      const response = await updateAlert({ alertId: selectedAlert._id, data: form }).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        await refetch();
        onClose();
      }
    } catch (error) {
      console.log("Error while updating alert", error);
      toast.error(error?.data?.message || "Error while updating alert");
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
    <form onSubmit={updateAlertHandler} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <Dropdown
          defaultText={selectedAlert?.type}
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
          defaultText={selectedAlert?.severity}
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
          defaultText={selectedAlert?.status}
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
            <input
              type="radio"
              name="notificationType"
              checked={form?.platform === "email"}
              value="email"
              onChange={handleNotificationType}
            />
            Email
          </label>
          <label className="flex items-center gap-1 text-sm md:text-base cursor-pointer">
            <input
              type="radio"
              checked={form?.platform === "web"}
              name="notificationType"
              value="web"
              onChange={handleNotificationType}
            />
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
export default EditAlert;
