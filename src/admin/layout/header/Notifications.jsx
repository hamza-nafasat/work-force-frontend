import ProfilePic from "../../../assets/images/header/profilepic.webp";
import GlobalLoader from "../../../components/layout/GlobalLoader";
import { useGetAllNotificationsQuery } from "../../../redux/api/notificationApi";

const notificationLists = [
  {
    userProfile: ProfilePic,
    title: "worker exit alert",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "worker absence report",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "geo-fencing added",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "out-fence",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "in-fence",
    message: "Unauthorized vehicle use.",
    time: "5m",
  },
];

const Notifications = () => {
  const { data, isLoading } = useGetAllNotificationsQuery("");
  return isLoading ? (
    <GlobalLoader />
  ) : (
    <div>
      <h3 className="text-base md:text-md text-primary font-semibold px-3 pt-3 pb-2 border-b sticky top-0 left-0 bg-white">
        Notifications
      </h3>
      <div className="mt-1">
        {data?.data?.length > 0 ? (
          data?.data?.map((notification, i) => (
            <div
              key={i}
              className="border-b py-1 px-2 flex items-start justify-between gap-1 cursor-pointer"
            >
              <div className="flex items-start gap-1">
                {/* <img
                  src={notification?.userProfile}
                  alt="profile"
                  className="w-[25px] h-[25px] object-cover rounded-full"
                /> */}
                <div>
                  <h3 className="text-xs font-medium">{notification?.title}</h3>
                  <p className="text-[10px] text-[#00000099]">{notification?.message}</p>
                </div>
              </div>
              <p className="text-[#00000099] text-[10px]">{notification?.time}</p>
            </div>
          ))
        ) : (
          <p className="p-3 text-sm text-center">No notifications yet!</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
