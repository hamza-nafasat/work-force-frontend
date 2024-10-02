import React from "react";
import AdminAside from "./aside/AdminAside";
import AdminHeader from "./header/AdminHeader";
import AdminMain from "./main/AdminMain";

const AdminDashboard = () => {
  return (
    <section className="w-full relative user-dashboard p-2 sm:p-4 h-screen overflow-x-hidden overflow-y-scroll bg-[#f5f7fb] z-[0]">
      <div className="flex flex-col-2 gap-4 h-full">
        <div className="hidden xl:block">
          <AdminAside />
        </div>
        <div className="w-[100%] h-[calc(100vh-35px)] overflow-y-scroll no-scrollbar pb-1 scroll-to-top">
          <AdminHeader />
          <AdminMain />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
