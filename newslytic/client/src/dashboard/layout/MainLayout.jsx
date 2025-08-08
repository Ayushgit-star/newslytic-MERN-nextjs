import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100">
      <Sidebar />
      <div className="ml-[260px] w-[calc(100vw-268px)] min-h-[100vh]">
        <Header />
        <div className="p-4">
          <div className="pt-[85px]">
            <Outlet />
            {/* <Outlet /> is replaced by the component(<Navigate to="/dashboard/admin" /> i.e., <ProtectRole />) for the current nested route. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
