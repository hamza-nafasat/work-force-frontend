import React, { useState } from "react";
import Title from "../../../components/shared/title/Title";
import AddIcon from "../../../assets/svgs/AddIcon";
import DataTable from "react-data-table-component";
import { alertsData } from "../../../data/data";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import EditIcon from "../../../assets/svgs/EditIcon";
import { FaHouseDamage } from "react-icons/fa";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import Modal from "../../../components/modals/Modal";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import EditAlert from "./EditAlert";
import AddAlert from "./AddAlert";
import { confirmAlert } from "react-confirm-alert";

const columns = (modalOpenHandler, deleteHandler) => [
  {
    name: "Alert Type",
    selector: (row) => (
      <p className="text-primary capitalize font-medium flex items-center gap-2">
        {row.alert === "damage" ? (
          <FaHouseDamage />
        ) : row.alert === "offline" ? (
          <HiOutlineStatusOffline />
        ) : (
          <LuArrowUpLeftFromCircle />
        )}
        {row.alert}
      </p>
    ),
  },
  {
    name: "Severity",
    selector: (row) => (
      <div
        className={`flex items-center justify-center gap-1 rounded-lg w-[110px] h-[32px] capitalize text-sm sm:text-base font-medium ${
          row.severity === "high"
            ? "bg-[#FF655433] text-[#FF4646]"
            : row.severity === "medium"
            ? "bg-[#F8982233] text-[#F89822]"
            : "bg-[#3AA35733] text-[#3AA357]"
        }`}
      >
        {row.severity === "high" ? (
          <FaLongArrowAltUp />
        ) : row.severity === "medium" ? (
          <FaLongArrowAltLeft />
        ) : (
          <FaLongArrowAltDown />
        )}
        {row.severity}
      </div>
    ),
  },
  {
    name: "Notification Type",
    selector: (row) => (
      <div className="flex items-center gap-2 capitalize">
        <div
          className={`size-5 rounded-full border-2 ${
            row.notificationType === "on email"
              ? "border-[#F89822]"
              : "border-[#0067C2]"
          }`}
        ></div>
        {row.notificationType}
      </div>
    ),
  },
  {
    name: "Status",
    selector: (row) => (
      <p>
        {row.status === true ? 'Enable':'Disable'}
      </p>
    ),
  },
  {
    name: "Actions",
    selector: (row) => (
      <div className="flex items-center gap-3">
      <div className="cursor-pointer" onClick={() => modalOpenHandler('edit')}>
        <EditIcon />
      </div>
      <div className="cursor-pointer" onClick={() => deleteHandler(row?._id)}>
        <DeleteIcon />
      </div>
      </div>
    ),
  },
];

const Alerts = () => {
  const [modal, setModal] = useState(false);

  const modalOpenHandler = (type) => {
    setModal(type)
  }
  const modalCloseHandler = () => setModal(false)

  const deleteHandler = (id) => {
    confirmAlert({
      title: 'Delete Alert',
      message: 'Are you sure, you want to delete the alert?',
      buttons: [
        {
          label: 'Yes', 
          onClick: () => console.log(id)
        },
        {
          label: 'No'
        }
      ]
    })
  }

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Alerts" />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler('add')}>
          <AddIcon />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, deleteHandler)}
          data={alertsData}
          customStyles={tableStyles}
          pagination
        />
      </div>
      {modal === 'edit' && (
        <Modal onClose={modalCloseHandler} title='Edit Alert' width="w-[300px] md:w-[850px]">
          <EditAlert onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === 'add' && (
        <Modal onClose={modalCloseHandler} title='Add Alert' width="w-[300px] md:w-[850px]">
          <AddAlert onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Alerts;

const tableStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(17, 17, 17, 1)",
    },
  },
  rows: {
    style: {
      background: "rgba(123, 192, 247, 0.15)",
      borderRadius: "6px",
      padding: "14px 0",
      margin: "10px 0",
      borderBottomWidth: "0 !important",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
    },
  },
};
