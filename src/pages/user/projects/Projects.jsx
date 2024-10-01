import Title from "../../../components/shared/title/Title";
import AddIcon from "../../../assets/svgs/AddIcon";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import { projectsData } from "../../../data/data";
import DataTable from "react-data-table-component";
import CircularProgressBar from "../../../components/home/CircularProgressBar";
import DateIcon from "../../../assets/svgs/projects/DateIcon";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import EditIcon from "../../../assets/svgs/EditIcon";
import { useState } from "react";
import Modal from "../../../components/modals/Modal";
import EditProject from "./EditProject";
import { confirmAlert } from "react-confirm-alert";

const columns = (modalOpenHandler,navigate, deleteHandler) => [
  {
    name: "Project Name",
    cell: (row) => (
      <p className="text-sm text-[#111111] font-medium">{row.projectName}</p>
    ),
    width: "auto",
  },
  {
    name: "Start Date",
    cell: (row) => (
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Start Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row.startDate}
          </p>
        </div>
      </div>
    ),
    width: "220px",
  },
  {
    name: "Due Date",
    cell: (row) => ( 
      <div className="flex items-center gap-1">
        <DateIcon />
        <div>
          <p className="text-[12px] text-[#11111199]">Due Date:</p>
          <p className="text-sm font-medium text-[#11111199] mt-1">
            {row.dueDate}
          </p>
        </div>
      </div>
    ),
    width: "220px",
  },
  {
    name: "Labours",
    cell: (row) => {
      const displayImages = row.labours.slice(0, 3);
      const extraCount = row.labours.length - displayImages.length;
      return (
        <div className="flex items-center">
          {displayImages.map((img, i) => (
            <img
              src={img.image}
              key={i}
              className="w-[35px] h-[35px] rounded-full object-cover ml-[-0.5rem]"
              alt="profile-pic"
            />
          ))}
          {extraCount > 0 && (
            <div className="w-[35px] h-[35px] rounded-full bg-[#d3d3d3] ml-[-0.5rem] text-base font-semibold text-[#000] flex items-center justify-center">
              {extraCount}+
            </div>
          )}
        </div>
      );
    },
    width: "150px",
  },
  {
    name: "Workforce Count",
    cell: (row) => (
      <div className="flex items-center justify-center h-full">
        <CircularProgressBar
          percentage={row.workforceCount}
          width="w-[40px]"
          height="h-[40px]"
          percentageSize="text-[10px]"
        />
      </div>
    ),
    width: "170px",
    center: true
  },
  {
    name: " Action",
    cell: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => navigate(`/user/projects/${row.id}`)}>
          <IoEye fontSize={18} style={{marginTop:'4px'}} />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler('edit')}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    ),
    width: "100px",
    center: true
  },
];


const Projects = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  const modalOpenHandler = modalType => setModal(modalType)
  const modalCloseHandler = () => setModal(false)

  const deleteHandler = () => {
    confirmAlert({
      title: 'Delete Project',
      message: 'Are you sure, you want to delete the project?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            console.log("project deleted")
          }
        },
        {
          label: 'No'
        }
      ]
    })
  }

  return (
    <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Projects" />
        </div>
        <div className="flex items-center gap-2">
          <Link to='/user/add-project'>
            <AddIcon />
          </Link>
          <div className="cursor-pointer">
            <DeleteIcon /> 
          </div>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler,navigate, deleteHandler)}
          data={projectsData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="100vh"
        />
      </div>
      {modal === 'edit' && (
        <Modal title='Edit Project' onClose={modalCloseHandler}>
          <EditProject onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Projects;

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
      borderBottomWidth: '0 !important'
    },
  },
};
