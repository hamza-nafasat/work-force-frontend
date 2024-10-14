/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../../../components/auth/Input";
import Dropdown from "../../../components/shared/dropdown/Dropdown";
import profileImg from "../../../assets/images/header/profilepic.webp";
import Button from "../../../components/shared/button/Button";
import { IoCamera } from "react-icons/io5";
import { useUpdateSingleUserMutation } from "../../../redux/api/userApi";
import { toast } from "react-toastify";

const EditUser = ({ onClose, refetch, selectedRow }) => {
  const [updateUser, { isLoading }] = useUpdateSingleUserMutation("");
  const [imgSrc, setImgSrc] = useState(null);
  const [form, setForm] = useState({
    firstName: selectedRow?.firstName,
    lastName: selectedRow?.lastName,
    email: selectedRow?.email,
    phoneNumber: selectedRow?.phoneNumber,
    role: "",
    image: "",
    address: selectedRow?.address,
  });
  const roleSelectHandler = (option) => setForm({ ...form, role: option });
  const uploadImgHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgSrc(reader.result);
        setForm({ ...form, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const userUpdateHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      if (form.role) formData.append("role", form.role);
      formData.append("phoneNumber", form.phoneNumber);
      if (form.image) formData.append("file", form.image);
      formData.append("address", form.address);
      const response = await updateUser({ userId: selectedRow?._id, data: formData }).unwrap();
      if (response?.success) {
        await refetch();
        toast.success(response?.message);
        onClose();
      }
    } catch (error) {
      console.log("Error while updating user", error);
      toast.error(error?.data?.message || "Error while updating user");
    }
  };
  return (
    <form onSubmit={userUpdateHandler} className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
      <div className="lg:col-span-9">
        <div className="grid lg:grid-cols-12 gap-1 md:gap-4">
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="First Name"
              placeholder="Last Name"
              labelWeight="font-semibold"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="Last Name"
              placeholder="Last Name"
              labelWeight="font-semibold"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="email"
              label="Email Address"
              placeholder="Email Address"
              labelWeight="font-semibold"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="tel"
              label="Phone Number"
              placeholder="Phone Number"
              labelWeight="font-semibold"
              value={form.phoneNumber}
              onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
            />
          </div>
          <div className="lg:col-span-6">
            <Label label="Role" />
            <Dropdown
              options={[
                { option: "User", value: "user" },
                { option: "Admin", value: "admin" },
              ]}
              defaultText={selectedRow?.role}
              onSelect={roleSelectHandler}
            />
          </div>
          <div className="lg:col-span-6">
            <Input
              type="text"
              label="Address"
              placeholder="Address"
              labelWeight="font-semibold"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3">
        <img
          src={imgSrc || selectedRow?.image?.url || profileImg}
          alt=""
          className="w-[278px] h-[278px] object-cover rounded-full mb-4"
        />
        <div className="flex justify-center">
          <ChangePhoto onChange={uploadImgHandler} />
        </div>
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
          <Button
            disabled={isLoading}
            type="submit"
            text="Add"
            width="w-[150px]"
            height="h-[45px] md:h-[60px]"
          />
        </div>
      </div>
    </form>
  );
};

export default EditUser;

const Label = ({ label }) => (
  <label className="text-[#000] text-base mb-2 block font-semibold">{label}</label>
);

const ChangePhoto = ({ onChange }) => (
  <button
    type="button"
    className="relative cursor-pointer bg-[rgb(12,103,188)] text-white font-medium h-[45px] md:h-[60px] w-[200px] rounded-xl flex items-center gap-1 justify-center"
  >
    Change Photo
    <IoCamera fontSize={20} />
    <input type="file" onChange={onChange} className="absolute inset-0 z-50 cursor-pointer opacity-0" />
  </button>
);
