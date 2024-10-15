import React from "react";
import ProfilePic from "../../../assets/images/header/profilepic.webp";
import { Link } from "react-router-dom";

const notificationLists = [
  {
    userProfile: ProfilePic,
    title: "Exceeded Time Limit",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "Exceeded Time Limit",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "Exceeded Time Limit",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "Exceeded Time Limit",
    message: "Visitor stayed too long.",
    time: "2m",
  },
  {
    userProfile: ProfilePic,
    title: "Vehicle Misuse Detected",
    message: "Unauthorized vehicle use.",
    time: "5m",
  },
  {
    userProfile: ProfilePic,
    title: "Lost Smart Badge",
    message: "Badge reported missing.",
    time: "10m",
  },
  {
    userProfile: ProfilePic,
    title: "System Alert Triggered",
    message: "Sensor detected issue.",
    time: "15m",
  },
  {
    userProfile: ProfilePic,
    title: "Motion Detected Alert",
    message: "Unexpected motion seen.",
    time: "20m",
  },
  {
    userProfile: ProfilePic,
    title: "Low Battery Warning",
    message: "Replace battery soon.",
    time: "25m",
  },
];

const Notifications = () => {
  return (
    <div>
      <h3 className="text-sm md:text-base text-[#414141] font-semibold px-3 pt-3 pb-2 border-b sticky top-0 left-0 bg-white">
        Notifications
      </h3>
      <div className="mt-1">
        {notificationLists.length > 0 ? (
          notificationLists.map((notification, i) => (
            <div
              key={i}
              className="border-b py-1 px-2 flex items-center justify-between gap-1 cursor-pointer"
            >
              <div className="flex items-center gap-1">
                <img
                  src={notification.userProfile}
                  alt="profile"
                  className="w-[25px] h-[25px] object-cover rounded-full"
                />
                <div>
                  <h3 className="text-xs font-medium">{notification.title}</h3>
                  <p className="text-[10px] text-[#00000099]">
                    {notification.message}
                  </p>
                </div>
              </div>
              <p className="text-[#00000099] text-[10px]">
                {notification.time}
              </p>
            </div>
          ))
        ) : (
          <p className="p-3 text-sm text-center">No notifications yet!</p>
        )}
      </div>
      {notificationLists.length > 0 && (
        <Link to='/user/notification-detail' className="text-center py-1 px-4 text-sm font-medium text-primary block sticky bottom-0 left-0 bg-white">
          See all notifications
        </Link>
      )}
    </div>
  );
};

export default Notifications;
