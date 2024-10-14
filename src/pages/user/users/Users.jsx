import DataTable from "react-data-table-component";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import AddIcon from "../../../assets/svgs/AddIcon";
import Title from "../../../components/shared/title/Title";
import Modal from "../../../components/modals/Modal";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import EditIcon from "../../../assets/svgs/EditIcon";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { confirmAlert } from "react-confirm-alert";
import { useDeleteSingleUserMutation, useGetAllUsersQuery } from "../../../redux/api/userApi";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import { toast } from "react-toastify";

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: "Profile",
    selector: (row) => (
      <img
        src={row?.image?.url}
        alt="profile pic"
        className="w-[44px] h-[44px] object-cover rounded-full"
      />
    ),
    width: "10%",
  },
  {
    name: "Full Name",
    selector: (row) => (
      <p>
        {row?.firstName} {row?.lastName}
      </p>
    ),
    width: "10%",
  },
  {
    name: "Email Address",
    selector: (row) => row?.email,
    width: "20%",
  },
  {
    name: "Phone",
    selector: (row) => row?.phoneNumber,
    width: "10%",
  },
  {
    name: "Address",
    selector: (row) => row?.address,
    width: "25%",
  },
  {
    name: "Role",
    selector: (row) => row?.role,
    width: "10%",
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => navigate(`/user/users/${row?._id}`)}>
          <IoEye fontSize={18} style={{ marginTop: "4px" }} />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler(row?._id)}>
          <DeleteIcon />
        </div>
      </div>
    ),
    width: "15%",
  },
];

const Users = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, refetch } = useGetAllUsersQuery("");
  const [deleteUser] = useDeleteSingleUserMutation();
  const [selectedRow, setSelectedRow] = useState(null);
  const [userData, setUserData] = useState([]);

  const modalOpenHandler = (modalType, row) => {
    setModal(modalType);
    if (row) setSelectedRow(row);
  };
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = (id) => {
    confirmAlert({
      title: "Delete User",
      message: "Are you sure, you want to delete the user?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            if (!id) toast.error("Error while deleting user");
            try {
              const response = await deleteUser({ userId: id }).unwrap();
              if (response?.success) {
                await refetch();
                toast.success(response?.message);
              }
            } catch (error) {
              console.log("Error while deleting user", error);
              toast.error(error?.data?.message || "Error while deleting user");
            }
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  useEffect(() => {
    if (isSuccess) setUserData(data?.data);
    console.log(data?.data);
  }, [data, isSuccess]);
  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Users" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => modalOpenHandler("add")}>
            <AddIcon />
          </div>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5">
        {userData && (
          <DataTable
            columns={columns(modalOpenHandler, navigate, deleteHandler)}
            data={userData}
            selectableRows
            selectableRowsHighlight
            customStyles={tableStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="70vh"
          />
        )}
      </div>
      {modal === "add" && (
        <Modal title="Add User" onClose={modalCloseHandler}>
          <AddUser refetch={refetch} onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit User" onClose={modalCloseHandler}>
          <EditUser refetch={refetch} selectedRow={selectedRow} onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Users;

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
