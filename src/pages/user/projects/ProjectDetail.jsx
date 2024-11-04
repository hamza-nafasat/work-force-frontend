/* eslint-disable react/prop-types */
import L from "leaflet";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { Link, useParams } from "react-router-dom";
import sensorImg from "../../../assets/images/projects/sensors.png";
import workersImg from "../../../assets/images/projects/worker.png";
import VehicleImg from "../../../assets/images/vehicles/vehicle.png";
import EditIcon from "../../../assets/svgs/EditIcon";
import TruckIcon from "../../../assets/svgs/home/TruckIcon";
import AlertSideIcon from "../../../assets/svgs/projects/AlertSideIcon";
import TimeIcon from "../../../assets/svgs/projects/TimeIcon";
import DonutChart from "../../../components/charts/donutChart/DonutChart";
import PieChartComponent from "../../../components/charts/pieChart/PieChartComponent";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import Modal from "../../../components/modals/Modal";
import Title from "../../../components/shared/title/Title";
import { alertRecords, projectTrackerData, vehiclesProjectPieChartData } from "../../../data/data";
import { useGetSingleProjectQuery } from "../../../redux/api/projectApi";
import EditProject from "./EditProject";
import NewScoreCard from "./NewScoreCard";

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
  const { data, isLoading, isSuccess, refetch } = useGetSingleProjectQuery({
    projectId: id,
  });
  const [modal, setModal] = useState(false);

  const editProjectModalHandler = (type) => setModal(type);
  const completeModalHandler = (type) => setModal(type);
  const closeModalHandler = () => setModal(false);

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
        isCompleted: singleProject?.isCompleted ? true : false,
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
        <div className="flex items-center gap-4">
          {!project?.isCompleted && (
            <button
              className="bg-primary rounded-lg py-[6px] px-4 text-base text-white"
              onClick={() => completeModalHandler("complete")}
            >
              Complete
            </button>
          )}
          <div className="cursor-pointer" onClick={() => editProjectModalHandler("edit-project")}>
            <EditIcon />
          </div>
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
            <div
              className={`border border-[#FF1313] bg-[#F55656] rounded-xl p-2 shadow-md grow text-center`}
            >
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
      {/* Newly */}
      <div className="grid grid-cols-12 mt-6 gap-4">
        <div className="col-span-12 lg:col-span-8 border-[1px]">dddsds</div>
        <div className="col-span-12 lg:col-span-4">
          <SmartTracker title="Smart Tracker" subTitle="Session by Device">
            <DonutChart data={projectTrackerData} />
          </SmartTracker>
        </div>
        <div className="col-span-12 lg:col-span-4 border-[1px]">labour performance chart</div>
        <div className="col-span-12 lg:col-span-8 border-[1px]">labour performance chart</div>
        <div className="col-span-12 lg:col-span-4 border-[1px]">chart</div>
        <div className="col-span-12 lg:col-span-4 border-[1px] ">chart</div>
        <div className="col-span-12 lg:col-span-4  bg-white rounded-[12px] p-4 lg:p-6 drop-shadow-xl">
          <h3 className="text-[#000] text-lg md:text-[24px] font-semibold">Vehicles</h3>
          <PieChartComponent
            layout="layout-one"
            data={vehiclesProjectPieChartData}
            centerIcon={<TruckIcon />}
            innerRadius={90}
            outerRadius={120}
          />
        </div>
        <div className="col-span-12 lg:col-span-12 border-[1px]">table</div>
      </div>
      {modal === "edit-project" && (
        <Modal title="Edit Project" onClose={closeModalHandler}>
          <EditProject refetch={refetch} selectedRow={project} onClose={closeModalHandler} />
        </Modal>
      )}
      {modal === "complete" && (
        <Modal
          title="New Score Card"
          onClose={closeModalHandler}
          width="w-[320px] md:w-[600px] lg:w-[1000px]"
        >
          <NewScoreCard
            refetch={refetch}
            projectId={project?.id}
            labours={project?.labours}
            onClose={closeModalHandler}
          />
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
        <Marker key={i} position={labour?.position} icon={createCustomIcon(labour?.image)}>
          <Popup>
            <UserPopup labour={labour} />
          </Popup>
        </Marker>
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

const UserPopup = ({ labour }) => {
  return (
    <div className="w-[233px] p-2">
      <div className="flex items-center gap-2">
        <img src={labour?.image} alt="" className="size-8 rounded-full" />
        <div>
          <h6 className="text-xs font-semibold capitalize">{labour?.fullName}</h6>
          <p className="text-[9px] text-[#414141]">
            current project: <span className="text-[11px]">building side</span>
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between gap-4">
          <div>
            <h6 className="text-xs font-medium text-[#414141]">Working hours:</h6>
            <p className="text-xs text-[#414141]">
              {labour?.workingHour?.startTime} - {labour?.workingHour?.endTime}
            </p>
          </div>
          <div>
            <h6 className="text-xs font-medium text-[#414141]">Status:</h6>
            <p className="text-xs text-[#414141]">{labour?.status}</p>
          </div>
        </div>
        <div className="mt-2">
          <h6 className="text-xs font-medium text-[#414141]">Recent Projects</h6>
          <ul className="mt-1">
            <li className="text-[#414141] text-[10px] list-disc ml-4">Downtown Revamp</li>
            <li className="text-[#414141] text-[10px] list-disc ml-4">Industrial Site</li>
            <li className="text-[#414141] text-[10px] list-disc ml-4">Construction Site</li>
          </ul>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            to={`/user/labours/${labour?._id}`}
            className="bg-[#E75D50] py-1 px-3 rounded-md !text-white text-[11px] font-medium"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

// newly

const SmartTracker = ({ title, subTitle, children }) => {
  return (
    <div className="p-4 md:p-5 bg-white rounded-[15px] drop-shadow-md h-[400px] sm:h-full">
      <h3 className="text-base md:text-[20px] font-semibold">{title}</h3>
      <p className="text-base font-light text-[#717579]">{subTitle}</p>
      <div className="flex flex-col items-center justify-center h-[180px] lg:h-[75%]">{children}</div>
    </div>
  );
};
