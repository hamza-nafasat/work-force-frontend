import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import EditIcon from '../../../assets/svgs/EditIcon';
import DeleteIcon from '../../../assets/svgs/DeleteIcon';
import { allContractorsData } from '../../../data/data';
import ProgressBar from '../../../components/shared/progress/ProgressBar';
import { MdKeyboardArrowDown } from 'react-icons/md';

const columns = (modalOpenHandler) => [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Contractors",
      selector: (row) => row.contractors,
    },
    {
      name: "Total Score",
      selector: (row) => (
        <ProgressBar value={row.totalScore} />
      ),
      width: '20%'
    },
    {
      name: "Violation Type",
      selector: (row) => (
        <div className="flex items-center flex-wrap gap-2">
          {row.violationType.map((type, i) => (
            <p className="text-sm text-[#8f531b] px-4 py-2 rounded-full bg-[#f78d2c26]" key={i}>{type}</p>
          ))}
        </div>
      ),
      width: '30%'
    },
    {
      name: "Action",
      selector: () => (
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer"
            onClick={() => modalOpenHandler("edit")}
          >
            <EditIcon />
          </div>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

const AllContractors = ({modalOpenHandler}) => {
  return (
    <div className='shadow-md rounded-md p-4'>
        <div className="flex items-center justify-between">
        <h2 className="text-base lg:text-lg font-semibold">All Contractors</h2>
        <CustomDropDown lists={['View All']} />
      </div> 
     <div className="mt-5">
     <DataTable
       columns={columns(modalOpenHandler)}
       data={allContractorsData}
       selectableRows
       selectableRowsHighlight
       customStyles={tableStyles}
       pagination
       fixedHeader
       fixedHeaderScrollHeight="70vh"
     />
   </div>
    </div>
  )
}

export default AllContractors

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
  
  const CustomDropDown = ({ lists }) => {
    const [isOptionOpen, setIsOptionOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select");
    const selectHandler = (option) => {
      setSelectedOption(option);
      setIsOptionOpen(false);
    };
    const optionsHandler = () => setIsOptionOpen(!isOptionOpen);
    return (
      <div className="relative w-[130px] z-50">
        <div
          className="flex items-center justify-between text-sm text-[#00000099] gap-3 cursor-pointer border py-1 px-2 rounded-md text-nowrap"
          onClick={() => optionsHandler()}
        >
          {selectedOption}
          <div className={`transition-all duration-300 ${isOptionOpen ? 'rotate-180':'rotate-0'}`}>
            <MdKeyboardArrowDown fontSize={18} />
          </div>
        </div>
        {isOptionOpen && (
          <ul className="flex flex-col bg-white rounded-lg shadow-md absolute top-[30px] left-0 w-full">
            {lists.map((list, i) => (
              <li
                key={i}
                className="py-1 px-2 border-b text-sm cursor-pointer text-[#00000099] hover:bg-gray-100"
                onClick={() => selectHandler(list)}
              >
                {list}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };