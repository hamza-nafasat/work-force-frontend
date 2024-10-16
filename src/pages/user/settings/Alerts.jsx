import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import DataTable from "react-data-table-component";
import { FaHouseDamage, FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltUp } from "react-icons/fa";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import { toast } from "react-toastify";
import AddIcon from "../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import EditIcon from "../../../assets/svgs/EditIcon";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Modal from "../../../components/modals/Modal";
import Title from "../../../components/shared/title/Title";
import { useDeleteAlertMutation, useGetAllAlertsQuery } from "../../../redux/api/alertApi";
import AddAlert from "./AddAlert";
import EditAlert from "./EditAlert";

const columns = (modalOpenHandler, deleteHandler) => [
  {
    name: "Alert Type",
    selector: (row) => (
      <p className="text-primary capitalize font-medium flex items-center gap-2">
        {row?.type === "damage" ? (
          <FaHouseDamage />
        ) : row?.type === "offline" ? (
          <HiOutlineStatusOffline />
        ) : (
          <LuArrowUpLeftFromCircle />
        )}
        {row?.type}
      </p>
    ),
  },
  {
    name: "Severity",
    selector: (row) => (
      <div
        className={`flex items-center justify-center gap-1 rounded-lg w-[110px] h-[32px] capitalize text-sm sm:text-base font-medium ${
          row?.severity === "high"
            ? "bg-[#FF655433] text-[#FF4646]"
            : row?.severity === "medium"
            ? "bg-[#F8982233] text-[#F89822]"
            : "bg-[#3AA35733] text-[#3AA357]"
        }`}
      >
        {row?.severity === "high" ? (
          <FaLongArrowAltUp />
        ) : row?.severity === "medium" ? (
          <FaLongArrowAltLeft />
        ) : (
          <FaLongArrowAltDown />
        )}
        {row?.severity}
      </div>
    ),
  },
  {
    name: "Platform",
    selector: (row) => (
      <div className="flex items-center gap-2 capitalize">
        <div
          className={`size-5 rounded-full border-2 ${
            row?.platform === "email" ? "border-[#F89822]" : "border-[#0067C2]"
          }`}
        ></div>
        {row?.platform}
      </div>
    ),
  },
  {
    name: "Status",
    selector: (row) => <p>{row?.status}</p>,
  },
  {
    name: "Actions",
    selector: (row) => (
      <div className="flex items-center gap-3">
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
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
  const { data, isLoading, refetch } = useGetAllAlertsQuery("");
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [deleteAlert] = useDeleteAlertMutation();
  const [modal, setModal] = useState(false);

  const modalOpenHandler = (type, row) => {
    setModal(type);
    if (row) setSelectedAlert(row);
  };
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete Alert",
      message: "Are you sure, you want to delete this alert ?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            if (!id) return toast.error("Error while deleting alert");
            try {
              const response = await deleteAlert({ alertId: id }).unwrap();
              if (response?.success) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("Error while deleting alert", error);
              toast.error(error?.data?.message || "Error while deleting alert");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Alerts" />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler("add")}>
          <AddIcon />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, deleteHandler)}
          data={data?.data || []}
          customStyles={tableStyles}
          pagination
        />
      </div>
      {modal === "edit" && (
        <Modal onClose={modalCloseHandler} title="Edit Alert" width="w-[300px] md:w-[850px]">
          <EditAlert selectedAlert={selectedAlert} refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "add" && (
        <Modal onClose={modalCloseHandler} title="Add Alert" width="w-[300px] md:w-[850px]">
          <AddAlert refetch={refetch} onClose={modalCloseHandler} />
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
