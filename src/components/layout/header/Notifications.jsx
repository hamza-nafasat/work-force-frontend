import { Link } from "react-router-dom";
import Absence from "../../../assets/images/notifications/absence.png";
import Geofencing from "../../../assets/images/notifications/geofencing.png";
import Infence from "../../../assets/images/notifications/infence.png";
import Outfence from "../../../assets/images/notifications/outfence.png";
import Worker from "../../../assets/images/notifications/worker.png";
import Done from "../../../assets/svgs/notification/Done";
import RedDanger from "../../../assets/svgs/notification/RedDanger";
import Tick from "../../../assets/svgs/notification/Tick";
import Warning from "../../../assets/svgs/notification/Warning";
import YellowDanger from "../../../assets/svgs/notification/YellowDanger";
import { useGetAllNotificationsQuery } from "../../../redux/api/notificationApi";
import GlobalLoader from "../GlobalLoader";

// const notificationLists = [
//   {
//     title: "worker exit alert",
//     message: "Visitor stayed too long.",
//     time: "6m",
//   },
//   {
//     title: "worker absence report",
//     message: "Visitor stayed too long.",
//     time: "2m",
//   },
//   {
//     title: "geo-fencing added",
//     message: "Visitor stayed too long.",
//     time: "2m",
//   },
//   {
//     title: "out-fence",
//     message: "Visitor stayed too long.",
//     time: "2m",
//   },
//   {
//     title: "in-fence",
//     message: "Unauthorized vehicle use.",
//     time: "5m",
//   },
// ];

const Notifications = () => {
  const { data, isLoading } = useGetAllNotificationsQuery();

  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div>
      <h3 className="text-sm md:text-base text-[#414141] font-semibold px-3 pt-3 pb-2 border-b sticky top-0 left-0 bg-white">
        Notifications
      </h3>
      <div className="mt-1">
        {data?.data?.length > 0 ? (
          data?.data?.map((notification, i) => (
            <div
              key={i}
              className="border-b py-2 px-2 flex items-start justify-between gap-1 cursor-pointer hover:bg-[#00000005] "
            >
              <div className="flex items-start gap-3">
                {notification?.type === "worker-exit" && (
                  <img src={Worker} alt="profile" className="w-[30px] h-[30px] object-cover" />
                )}
                {notification?.type === "worker-absence" && (
                  <img src={Absence} alt="profile" className="w-[30px] h-[30px] object-cover" />
                )}
                {notification?.type === "geo-fencing-added" && (
                  <img src={Geofencing} alt="profile" className="w-[30px] h-[30px] object-cover" />
                )}
                {notification?.type === "out-fence" && (
                  <img src={Outfence} alt="profile" className="w-[30px] h-[30px] object-cover" />
                )}
                {notification?.type === "in-fence" && (
                  <img src={Infence} alt="profile" className="w-[30px] h-[30px] object-cover" />
                )}
                <div>
                  <div className="flex items-center gap-1">
                    {notification?.type === "worker-exit" && <YellowDanger />}
                    {notification?.type === "worker-absence" && <Warning />}
                    {notification?.type === "geo-fencing-added" && <Tick />}
                    {notification?.type === "out-fence" && <RedDanger />}
                    {notification?.type === "in-fence" && <Done />}

                    <h3 className="text-sm font-[400] capitalize">{notification?.type?.toUpperCase()}</h3>
                  </div>

                  <p className="text-[11px] text-[#7C7C7C] font-[400] ">{notification?.message}</p>
                </div>
              </div>
              <p className="text-[#7C7C7C] text-[10px]">{notification?.createdAt?.split("T")[0]}</p>
            </div>
          ))
        ) : (
          <p className="p-3 text-sm text-center">No notifications yet!</p>
        )}
      </div>
      {data?.data?.length > 0 && (
        <Link
          to="/user/notification-detail"
          className="text-center py-1 px-4 text-sm font-medium text-primary block sticky bottom-0 left-0 bg-white"
        >
          See all notifications
        </Link>
      )}
    </div>
  );
};

export default Notifications;
