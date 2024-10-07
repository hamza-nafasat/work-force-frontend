import DataTable from "react-data-table-component";
import Title from "../../../components/shared/title/Title";
import { attendanceData } from "../../../data/data";
import CheckIcon from "../../../assets/svgs/projects/CheckIcon";
import DatePicker from "react-datepicker";
import DateIcon from "../../../assets/svgs/projects/DateIcon";
import { useState } from "react";
import UserIcon from "../../../assets/svgs/projects/UserIcon";
import ProjectIcon from "../../../assets/svgs/projects/ProjectIcon";

const users = attendanceData.map((user) => user.contractorName);
console.log("users", users);

const columns = [
  {
    name: "Employee ID",
    selector: (row) => row.employeeId,
  },
  {
    name: "Contractor Name",
    selector: (row) => row.contractorName,
  },
  {
    name: "Department",
    selector: (row) => row.department,
  },
  {
    name: "Project",
    selector: (row) => row.project,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Status",
    selector: (row) => (
      <div className="flex items-center gap-3">
        {row.status === "Present" ? (
          <CheckIcon />
        ) : (
          <div className="w-[18px] h-[18px] rounded-[4px] bg-[#E75D50]"></div>
        )}
        <p>{row.status}</p>
      </div>
    ),
  },
  {
    name: "Hours Worked",
    selector: (row) => row.hoursWorked,
  },
  {
    name: "Reason For Absence",
    selector: (row) => row.reasonForAbsence,
  },
];

const Attendance = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedUser, setSelectedUser] = useState("All Users");
  const [projectName, setProjectName] = useState("");
  const [filteredData, setFilteredData] = useState(attendanceData)

  const searchFilteredHandler = () => {
      const filtered = attendanceData.filter((row) => {
        const isUserMatch =
          selectedUser === "All Users" || row.contractorName === selectedUser;
        const isProjectMatch =
          !projectName ||
          row.project.toLowerCase().includes(projectName.toLowerCase());
        const isStartDateMatch =
          !startDate || new Date(row.date) >= new Date(startDate);
        const isEndDateMatch = !endDate || new Date(row.date) <= new Date(endDate);
    
        return isUserMatch && isProjectMatch && isStartDateMatch && isEndDateMatch;
      });

      setFilteredData(filtered)
  }


  return (
    <div>
      <div className="flex flex-wrap items-center gap-4 py-4 relative z-[9]">
        <FilterBox>
          <UserIcon />
          <select
            className="focus:outline-none w-40 bg-transparent"
            defaultValue="All Users"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value='All Users'>All Users</option>
            {users.map((user, i) => (
              <option key={i} value={user}>
                {user}
              </option>
            ))}
          </select>
        </FilterBox>
        <FilterBox>
          <ProjectIcon />
          <input
            type="text"
            className="bg-transparent focus:outline-none"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </FilterBox>
        <FilterBox>
          <DateIcon />
          <DatePicker
            placeholderText="Select Start Date"
            className="focus:outline-none text-[#000] bg-transparent"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
          />
        </FilterBox>
        <FilterBox>
          <DateIcon />
          <DatePicker
            placeholderText="Select End Date"
            className="focus:outline-none text-[#000] bg-transparent"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MMMM d, yyyy"
          />
        </FilterBox>
        <button onClick={searchFilteredHandler} className="p-3 bg-[#F5F7FB] rounded-lg border-2 border-[#0000001A] text-sm md:text-base grow 2xl:grow-0">
          Search
        </button>
      </div>
      <div className="bg-white rounded-[15px] p-4 lg:p-6 h-[calc(100vh-80px)] overflow-hidden">
        <div>
          <Title title="Attendance" />
        </div>
        <div className="mt-5">
          <DataTable
            columns={columns}
            data={filteredData}
            selectableRows
            selectableRowsHighlight
            customStyles={tableStyles}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="70vh"
          />
        </div>
      </div>
    </div>
  );
};

export default Attendance;

const FilterBox = ({ children }) => {
  return (
    <div className="flex items-center gap-4 grow 2xl:grow-0 p-3 bg-[#F5F7FB] rounded-lg border-2 border-[#0000001A]">
      {children}
    </div>
  );
};

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
