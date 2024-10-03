import Title from "../../../components/shared/title/Title";
import DeleteIcon from "../../../assets/svgs/DeleteIcon";
import { projectsData } from "../../../data/data";
import DataTable from "react-data-table-component";
import CircularProgressBar from "../../../components/home/CircularProgressBar";
import DateIcon from "../../../assets/svgs/projects/DateIcon";
import { confirmAlert } from "react-confirm-alert";

const columns = (deleteHandler) => [
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
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    ),
    width: "100px",
    center: true
  },
];


const ProjectsList = () => {

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
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(deleteHandler)}
          data={projectsData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="100vh"
        />
      </div>
    </div>
  );
};

export default ProjectsList;

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