import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import NotificationIcon from "../../../assets/svgs/pagesIcons/NotificationIcon";
import Aside from "../aside/Aside";
import profilePic from "../../../assets/images/header/profilepic.webp";
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowForward, IoIosLogOut } from "react-icons/io";
import Notifications from "./Notifications";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const path = pathname[pathname.length - 1].replaceAll("-", " ");
  const profileRef = useRef();
  const notificationRef = useRef();

  const handleModal = () => setModalOpen(!modalOpen);
  const handleProfile = () => {
    setProfileActive(!profileActive);
    setNotificationActive(false);
  };

  const handleNotification = () => {
    setNotificationActive(!notificationActive);
    setProfileActive(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setProfileActive(false);
        setNotificationActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [profileRef, notificationRef]);

  return (
    <>
      <header className="bg-white px-2 sm:px-6 py-3 sm:py-4 rounded-[16px] flex items-center justify-between gap-3 sticky top-0 shadow-lg z-[99]">
        <button
          className="block xl:hidden cursor-pointer"
          onClick={handleModal}
          aria-label="Toggle Navigation Menu"
        >
          <IoMenuOutline size={30} />
        </button>
        <h1 className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-[#000] uppercase truncate">
          {path}
        </h1>

        <section className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <button
              className="cursor-pointer"
              onClick={handleNotification}
              aria-label="View Notifications"
              ref={notificationRef}
            >
              <NotificationIcon />
            </button>
            <div className="absolute top-[-5px] right-[-5px] bg-primary rounded-full w-4 h-4 text-white grid place-items-center text-[11px] font-medium">
              11
            </div>
            {notificationActive && (
              <div className="absolute top-[45px] right-[-60px] sm:right-0 bg-white drop-shadow-md rounded-lg w-[280px] h-[300px] border z-10 overflow-y-scroll no-scrollbar">
                <Notifications />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <img
              src={profilePic}
              alt="Profile"
              className="w-[38px] h-[38px] rounded-full object-cover hidden md:inline-block"
            />
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center gap-2 text-base text-[#000] cursor-pointer"
                onClick={handleProfile}
                aria-label="Toggle Profile Menu"
              >
                MKS
                <FaChevronDown size={10} className={profileActive ? "rotate-180" : ""} />
              </button>
              {profileActive && (
                <div className="absolute top-[40px] right-0 bg-white shadow-md rounded-lg w-[150px] z-10 border">
                  <Link
                    className="flex items-center justify-between px-3 py-2 border-b"
                    to={"/user/update-profile"}
                    onClick={() => setProfileActive(false)}
                  >
                    Profile
                    <IoIosArrowForward />
                  </Link>
                  <button
                    className="flex items-center justify-between px-3 py-2 w-full text-left"
                    onClick={() => setProfileActive(false)}
                    aria-label="Logout"
                  >
                    Logout
                    <IoIosLogOut />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </header>

      <nav
        className={`fixed top-0 left-0 bg-[#00000099] block xl:hidden transition-all duration-400 overflow-y-scroll ${
          modalOpen ? "opacity-100 inset-0 z-[99]" : "opacity-0"
        }`}
        onClick={handleModal}
        aria-label="Mobile Navigation Menu"
      >
        <div
          className={`transition-all duration-500 m-4 absolute top-0 left-0 z-[99] ${
            modalOpen ? "ml-4" : "ml-[-20rem]"
          }`}
        >
          <Aside />
        </div>
      </nav>
    </>
  );
};

export default Header;
