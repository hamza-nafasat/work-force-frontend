/* eslint-disable react/prop-types */
import L from "leaflet";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, Marker, Polygon, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import sensorImg from "../../../assets/images/projects/sensors.png";
import workersImg from "../../../assets/images/projects/worker.png";
import VehicleImg from "../../../assets/images/vehicles/vehicle.png";
import EditIcon from "../../../assets/svgs/EditIcon";
import AlertSideIcon from "../../../assets/svgs/projects/AlertSideIcon";
import TimeIcon from "../../../assets/svgs/projects/TimeIcon";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Title from "../../../components/shared/title/Title";
import { alertRecords } from "../../../data/data";
import { useGetSingleProjectQuery } from "../../../redux/api/projectApi";
import Modal from "../../../components/modals/Modal";
import EditProject from "./EditProject";

const createCustomIcon = (imgUrl) => {
  return L.divIcon({
    html: `
      <div class="w-[45px] h-[45px] rounded-full overflow-hidden">
        <img src="${imgUrl}" class="!w-full !h-full object-cover" />
      </div>
    `,
    iconAnchor: [15, 45],
    popupAnchor: [0, -45],
  });
};

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { data, isLoading, isSuccess, refetch } = useGetSingleProjectQuery({ projectId: id });
  const [modal, setModal] = useState(false)

  const editOpenModalHandler = () => setModal(true)
  const editCloseModalHandler = () => setModal(false)

  // console.log("project", project);
  useEffect(() => {
    if (isSuccess && data?.data) {
      const singleProject = data?.data;
      setProject({
        id: singleProject?._id,
        projectName: singleProject?.name,
        startDate: singleProject?.startDate,
        dueDate: singleProject?.endDate,
        labours: singleProject?.labours.map((labour) => ({
          ...labour,
          _id: labour?._id,
          name: labour?.fullName,
          image: labour?.image?.url,
          position: labour?.position || [25.16987, 55.296249],
        })),
        workforceCount: "85",
        action: "",
        position: singleProject?.position,
        area: singleProject?.area,
        location: singleProject?.location,
        projectDetail: singleProject?.description,
        status: singleProject?.status,
      });
    }
  }, [data, isSuccess]);

  console.log("project", project);

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Title title="Project Detail" />
        </div>
        <div className="cursor-pointer" onClick={editOpenModalHandler}>
          <EditIcon />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
        <div className="lg:col-span-8 bg-[#EBF6FE] p-4 rounded-xl">
          <p className="text-base md:text-lg font-semibold">{project?.projectName}</p>
          <div className="mt-4 md:mt-5">
            <p className="text-sm md:text-base text-[#111111cc]">Description</p>
            <p className="text-sm text-[#111111] mt-1">{project?.projectDetail}</p>
          </div>
        </div>
        {/* second column */}
        <div className="lg:col-span-4">
          <div className="flex justify-between gap-4">
            <div className={`border border-[#8E8E8E] rounded-xl p-2 shadow-md grow text-center`}>
              <p className="text-sm md:text-base text-[#111111cc]">Start Date</p>
              <p className="text-sm sm:text-base md:text-md font-semibold mt-1">{project?.startDate}</p>
            </div>
            <div className={`border border-[#FF1313] bg-[#F55656] rounded-xl p-2 shadow-md grow text-center`}>
              <p className="text-sm md:text-base text-white">Due Date</p>
              <p className="text-sm sm:text-base md:text-md font-semibold mt-1 text-white">
                {project?.dueDate}
              </p>
            </div>
          </div>
          <div className="border border-[#8E8E8E] rounded-xl p-2 shadow-md mt-4">
            <div className="flex items-center gap-2 text-sm md:text-base text-[#111111cc]">
              <FaMapMarkerAlt />
              Location
            </div>
            <p className="text-sm sm:text-md lg:text-lg">Taetratech, Lakhpat Road, Lahore</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6">
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <DetailWidget title="Total Vehicles" value="0" icon={VehicleImg} />
            <DetailWidget title="Total Sensors" value="0" icon={sensorImg} />
            <DetailWidget title="Total Workers" value={project?.labours?.length} icon={workersImg} />
          </div>
          <div className="mt-4">
            <Map position={project?.position} area={project?.area} labours={project?.labours} />
          </div>
        </div>
        <div className="lg:col-span-4">
          <Alerts />
          <div className="mt-4">
            <Workers labours={project?.labours} />
          </div>
        </div>
      </div>
      {modal && (
        <Modal onClose={editCloseModalHandler}>
          <EditProject refetch={refetch} selectedRow={project} onClose={editCloseModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default ProjectDetail;

const Workers = ({ labours }) => {
  return (
    <div className="border border-[#CFCFCF4D] rounded-xl p-4 shadow-md h-[338px] overflow-y-scroll custom-scrollbar">
      <h6 className="text-sm md:text-lg text-[#292D32] font-bold border-b border-[#7B7B7B2B] pb-1 pl-2">
        Workers
      </h6>
      {labours?.map((worker, i) => (
        <Worker
          key={i}
          name={worker.name}
          img={worker.image}
          id={worker._id}
          gender={worker.gender}
          status={worker.status}
          designation={worker.profession}
        />
      ))}
    </div>
  );
};

const Worker = ({ name, img, id, gender, status, designation }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap sm:items-center justify-between gap-4 py-2 border-b border-[#e5e5e5]">
      <div className="flex items-center gap-2">
        <img src={img} alt="image" className="w-[45px] h-[45px] object-cover" />
        <div>
          <p className="text-sm md:text-base text-[#5C5B5B] leading-none">{name}</p>
          <p className="text-[12px] text-[#5C5B5B] leading-none">{id}</p>
          <p className="text-[8px] text-[#41414199] leading-none mt-[2px]">{gender}</p>
        </div>
      </div>
      <div
        className={`flex justify-center ${
          status === "on-leave"
            ? "bg-transparent border border-[#084781] text-[#084781]"
            : "bg-[#084781] text-white"
        } px-2 py-1 rounded-full text-[10px] font-semibold`}
      >
        {status}
      </div>
      <p className="text-[10px] font-semibold text-[#414141] flex justify-end">{designation}</p>
    </div>
  );
};

const Alerts = () => {
  return (
    <div className="border border-[#CFCFCF4D] rounded-xl p-4 shadow-md h-[300px] overflow-y-scroll custom-scrollbar">
      <h6 className="text-sm md:text-lg text-[#292D32] font-bold border-b border-[#7B7B7B2B] pb-1 pl-2">
        Alerts
      </h6>
      {alertRecords?.map((alert, i) => (
        <Alert
          key={i}
          title={alert.title}
          id={alert.id}
          img={alert.img}
          time={alert.alertTime}
          alert={alert.alert}
        />
      ))}
    </div>
  );
};

const Alert = ({ title, id, img, time, alert }) => {
  return (
    <div className="relative p-2 border-b border-[#e5e5e5]">
      <div className="flex justify-between gap-2 pl-2">
        <div className="flex items-center gap-2">
          <img src={img} alt="image" className="w-[30px] h-[30px] object-cover" />
          <div>
            <p className="text-[10px] text-[#5C5B5B]">{title}</p>
            <p className="text-[6px] text-[#5C5B5B]">{id}</p>
          </div>
        </div>
        <div className="flex items-center gap-[2px]">
          <TimeIcon />
          <div className="text-[8px] text-[#5C5B5B]">{time}</div>
        </div>
      </div>
      <p className="text-[12px] font-medium text-[#5C5B5B] pl-2">
        <span className="font-semibold text-[#FF0000]">Attention: </span>A is
        {alert}
      </p>
      <div className="absolute top-[11%] left-0">
        <AlertSideIcon />
      </div>
    </div>
  );
};

const Map = ({ area, labours }) => {
  return (
    <MapContainer
      center={[25.256987, 55.296249]}
      zoom={10}
      scrollWheelZoom={true}
      style={{
        height: "480px",
        width: "100%",
        zIndex: 0,
        borderRadius: "20px",
      }}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {labours?.map((labour, i) => (
        <Marker key={i} position={labour?.position} icon={createCustomIcon(labour?.image)}></Marker>
      ))}
      {area && area.length > 0 && <Polygon positions={area.map(([lat, lng]) => [lng, lat])} color="blue" />}
    </MapContainer>
  );
};

const DetailWidget = ({ title, value, icon }) => {
  return (
    <div className="border border-[#8E8E8E99] shadow-md rounded-2xl p-4 flex items-center justify-between gap-4 flex-1 relative">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm md:text-base font-semibold text-[#112C5F]">{title}</p>
        <h3 className="text-[28px] lg:text-[40px]">{value}</h3>
      </div>
      <img src={icon} className="w-20 2xl:w-[120px] h-20 md:h-[120px] object-contain" alt="image" />
    </div>
  );
};
