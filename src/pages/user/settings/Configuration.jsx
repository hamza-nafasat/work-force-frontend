import React, { useState } from "react";
import Title from "../../../components/shared/title/Title";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import Input from "../../../components/auth/Input";
import Modal from "../../../components/modals/Modal";
import Button from "../../../components/shared/button/Button";

const Configuration = () => {
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Remote Cloud Database");
  const [pendingOption, setPendingOption] = useState("");

  const modalOpenHandler = () => setModal(true);
  const modalCloseHandler = () => setModal(false);

  const handleRadioChange = (event) => {
    setPendingOption(event.target.value);
    modalOpenHandler();
  };

  const handleConfirmChange = () => {
    setSelectedOption(pendingOption);
    modalCloseHandler();
  };

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 mt-4">
      <Title title="Pull Request Intervals" />
      <div className="pl-0 md:pl-8 mt-4 md:mt-6">
        <label className="text-sm md:text-base font-medium mb-2 block">
          Select Time Intervals
        </label>
        <Dropdown
          defaultText="Select Time Interval"
          options={[
            { option: "3 minutes" },
            { option: "5 minutes" },
            { option: "10 minutes" },
          ]}
        />
        <h3 className="text-sm md:text-base font-medium mb-2 mt-4 md:mt-6">
          Database Type
        </h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="database"
              value="Remote Cloud Database"
              onChange={handleRadioChange}
              checked={selectedOption === "Remote Cloud Database"}
            />
            Remote Cloud Database
          </label>
          <label className="flex items-center gap-1 text-sm">
            <input
              type="radio"
              name="database"
              value="Local Database"
              onChange={handleRadioChange}
              checked={selectedOption === "Local Database"}
            />
            Local Database
          </label>
        </div>
        <div className="mt-4">
          {selectedOption === "Remote Cloud Database" && (
            <Input type="text" placeholder="Database Name" />
          )}
          {selectedOption === "Local Database" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-6">
                <Input type="text" placeholder="Server Address" />
              </div>
              <div className="lg:col-span-6">
                <Input type="number" placeholder="Port Number" />
              </div>
              <div className="lg:col-span-6">
                <Input type="text" placeholder="Database Name" />
              </div>
              <div className="lg:col-span-6">
                <Input type="text" placeholder="Username" />
              </div>
              <div className="lg:col-span-12">
                <Input type="password" placeholder="Password" />
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <Button text="Save" width="w-[150px]" />
        </div>
      </div>
      {modal && (
        <Modal
          onClose={modalCloseHandler}
          title="Database Storage Confirmation"
          width="w-[320px] md:w-[450px]"
        >
          <ConfirmationModal
            onClose={modalCloseHandler}
            onConfirm={handleConfirmChange}
          />
        </Modal>
      )}
    </div>
  );
};

export default Configuration;

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div>
      <h6 className="text-sm md:text-base text-gray-400 font-medium">
        Do you want to store your data in a local database
      </h6>
      <div className="mt-12 flex justify-end">
        <div className="flex flex-wrap items-center gap-4">
          <Button
            bg="#787878"
            text="Cancel"
            width="w-[120px]"
            height="h-[40px] md:h-[50px]"
            onClick={onClose}
          />
          <Button
            bg="#0c67bc"
            text="Change"
            width="w-[120px]"
            height="h-[40px] md:h-[50px]"
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};
