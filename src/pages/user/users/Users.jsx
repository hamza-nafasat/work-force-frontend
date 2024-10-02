import DataTable from "react-data-table-component";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import AddIcon from "../../../assets/svgs/AddIcon";
import Title from "../../../components/shared/title/Title";
import Modal from "../../../components/modals/Modal";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import EditIcon from "../../../assets/svgs/EditIcon";
import { usersData, vehiclesData } from "../../../data/data";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { confirmAlert } from "react-confirm-alert";
import { useGetAllLaboursQuery } from "../../../redux/api/labourApi";
import { useDispatch } from "react-redux";
import GlobalLoader from "../../../components/layout/GlobalLoader";

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: "Profile Photo",
    selector: (row) => (
      <img
        src={row.profilePhoto}
        alt="profile pic"
        className="w-[44px] h-[44px] object-cover rounded-full"
      />
    ),
  },
  {
    name: "Full Name",
    selector: (row) => row.fullName,
  },
  {
    name: "Nationality",
    selector: (row) => row.nationality,
  },
  {
    name: "Profession",
    selector: (row) => row.profession,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Working Hour",
    selector: (row) => row.workingHour,
  },
  {
    name: "Action",
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => navigate(`/user/users/${row.id}`)}>
          <IoEye fontSize={18} style={{ marginTop: "4px" }} />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler("edit", row)}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler(row.id)}>
          <DeleteIcon />
        </div>
      </div>
    ),
  },
];

const Users = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [usersData, setUsersData] = useState([]);
  const { data, isSuccess, isLoading, refetch } = useGetAllLaboursQuery("");
  const navigate = useNavigate();

  console.log(data);
  const modalOpenHandler = (modalType, row = false) => {
    setModal(modalType);
    if (row) setSelectedRow(row);
  };
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

  useEffect(() => {
    if (isSuccess && data?.data) {
      const users = data?.data.map((user) => ({
        id: user._id,
        profilePhoto: user.image.url,
        fullName: user.fullName,
        nationality: user.nationality,
        profession: user.profession,
        status: user.status,
        workingHour: `${user.workingHour.startTime} To ${user.workingHour.endTime}`,
        startTime: user.workingHour.startTime,
        endTime: user.workingHour.endTime,
        phoneNumber: user.phoneNumber,
        dateOfBirth: user.dateOfBirth,
        passportOrId: user.passportOrID,
        gender: user.gender,
        action: "",
      }));

      setUsersData(users);
    }
  }, [dispatch, data, isSuccess]);

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
        {usersData && (
          <DataTable
            columns={columns(modalOpenHandler, navigate, deleteHandler)}
            data={usersData}
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
          <EditUser selectedRow={selectedRow} refetch={refetch} onClose={modalCloseHandler} />
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
