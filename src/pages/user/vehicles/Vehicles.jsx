import DataTable from 'react-data-table-component'
import DeleteIcon from '../../../assets/svgs/DeleteIcon'
import AddIcon from '../../../assets/svgs/AddIcon'
import Title from '../../../components/shared/title/Title'
import Modal from '../../../components/modals/Modal'
import { useState } from 'react'
import AddVehicle from './AddVehicle'
import { IoEye } from "react-icons/io5";
import EditIcon from '../../../assets/svgs/EditIcon'
import EditVehicle from './EditVehicle'
import { vehiclesData } from '../../../data/data'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert'

const columns = (modalOpenHandler, navigate, deleteHandler) => [
  {
    name: 'Vehicle name',
    selector: (row) => row.vehicleName
  },
  {
    name: 'Brand',
    selector: (row) => row.brand
  },
  {
    name: 'Car Registration',
    selector: (row) => row.carRegistration
  },
  {
    name: 'Assign to',
    selector: (row) => row.assignTo
  },
  {
    name: 'Project',
    selector: (row) => row.project
  },
  {
    name: 'Action',
    selector: (row) => (
      <div className="flex items-center gap-2">
        <div className="cursor-pointer" onClick={() => navigate(`/user/vehicles/${row.id}`)}>
          <IoEye fontSize={18} style={{marginTop:'4px'}} />
        </div>
        <div className="cursor-pointer" onClick={() => modalOpenHandler('edit')}>
          <EditIcon />
        </div>
        <div className="cursor-pointer" onClick={() => deleteHandler()}>
          <DeleteIcon />
        </div>
      </div>
    )
  },
]

const Vehicles = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  
  const modalOpenHandler = (modalType) => setModal(modalType)
  const modalCloseHandler = () => setModal(false)

  const deleteHandler = () => {
    confirmAlert({
      title: 'Delete Vehicle',
      message: 'Are you sure, you want to delete the vehicle?',
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
          <Title title="Vehicles" />
        </div>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer" onClick={() => modalOpenHandler('add')}>
            <AddIcon />
          </div>
          <div className="cursor-pointer">
            <DeleteIcon />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          columns={columns(modalOpenHandler, navigate, deleteHandler)}
          data={vehiclesData}
          selectableRows
          selectableRowsHighlight
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </div>
      {modal === 'add' && (
        <Modal title='Add Vehicle' onClose={modalCloseHandler}>
          <AddVehicle onClose={modalCloseHandler} />
        </Modal>
      )}
      {modal === 'edit' && (
        <Modal title='Edit Vehicle' onClose={modalCloseHandler}>
          <EditVehicle onClose={modalCloseHandler} />
        </Modal>
      )}
    </div>
  )
}

export default Vehicles

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
  cells: {
    style: {
      color: 'rgba(17, 17, 17, 1)',
      fontSize: '14px'
    }
  }
};
