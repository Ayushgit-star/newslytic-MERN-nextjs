import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import storeContext from "../context/storeContext";

const ProtectDashboard = () => {
//   const userInfo = {
//     name: "ayu",
//     role: "admin",
//   };

  const { store } = useContext(storeContext);

  if (store.userInfo) {
    return <Outlet />;
    // <Outlet /> is replaced by the component(<MainLayout/>) for the current nested route.
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectDashboard;
