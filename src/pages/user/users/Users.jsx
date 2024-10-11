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
import { useGetAllUsersQuery } from "../../../redux/api/userApi";
import GlobalLoader from "../../../components/layout/GlobalLoader";

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: "Profile Photo",
    selector: (row) => (
      <img
        src={row.image}
        alt="profile pic"
        className="w-[44px] h-[44px] object-cover rounded-full"
      />
    ),
  },
  {
    name: "Full Name",
    selector: (row) => (
      <p>
        {row.firstName} {row.lastName}
      </p>
    ),
  },
  {
    name: "Email Address",
    selector: (row) => row.email,
  },
  {
    name: "Phone",
    selector: (row) => row.phone,
  },
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Role",
    selector: (row) => row.role,
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div
          className="cursor-pointer"
          onClick={() => navigate(`/user/users/${row.id}`)}
        >
          <IoEye fontSize={18} style={{ marginTop: "4px" }} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("edit")}
        >
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const Users = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { data, isSuccess, isLoading, refetch } = useGetAllUsersQuery("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isSuccess && data?.users) {
      const users = data?.users.map((user) => ({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phoneNumber,
        address: user.address,
        image: user.image.url,
        role: user.role,
      }));
      setUserData(users);
    }
  }, [data, isSuccess]);

  console.log("usersData", userData);

  const modalOpenHandler = (modalType) => setModal(modalType);
  const modalCloseHandler = () => setModal(false);

  const deleteHandler = () => {
    confirmAlert({
      title: "Delete User",
      message: "Are you sure, you want to delete the user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            console.log("project deleted");
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
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Users" />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer"
            onClick={() => modalOpenHandler("add")}
          >
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
          <AddUser onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === "edit" && (
        <Modal title="Edit User" onClose={modalCloseHandler}>
          <EditUser onClose={modalCloseHandler} />
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
