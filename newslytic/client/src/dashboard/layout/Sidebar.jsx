import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/image.png";
import { AiFillDashboard } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiNews } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import storeContext from "../../context/storeContext";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { store, dispatch } = useContext(storeContext);
  const navigate = useNavigate();

  // const userInfo = {
  //   role: "writer",
  // };

  const logout = () => {
    localStorage.removeItem("newsToken");
    dispatch({ type: "logout", payload: "" });
    navigate("/login");
  };

  return (
    <div className="w-[250px] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[50px] flex justify-center items-center">
        <Link to="/">
          <img
            src={image}
            alt="Newslytic"
            className="w-80 h-80 object-contain rounded-full pt-20"
          />
        </Link>
      </div>
      <ul className="mt-24 px-3 flex flex-col gap-y-1 font-medium">
        {store.userInfo?.role === "admin" ? (
          <>
            <li>
              <Link
                to="/dashboard/admin"
                className={`${
                  pathname === "/dashboard/admin"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6"
                } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/writer/add"
                className={`${
                  pathname === "/dashboard/writer/add"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#404040f6"
                } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <span className="text-xl">
                  <AiOutlinePlus />
                </span>
                <span>Add writer</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/writers"
                className={`${
                  pathname === "/dashboard/writers"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#404040f6"
                } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <span className="text-xl">
                  <FiUsers />
                </span>
                <span>Writers</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/dashboard/writer"
                className={`${
                  pathname === "/dashboard/writer"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#4040f6"
                } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/news/create"
                className={`${
                  pathname === "/dashboard/news/create"
                    ? "bg-indigo-500 text-white"
                    : "bg-white text-[#404040f6"
                } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
              >
                <span className="text-xl">
                  <FaPlus />
                </span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            to="/dashboard/news"
            className={`${
              pathname === "/dashboard/news"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6"
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
          >
            <span className="text-xl">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/profile"
            className={`${
              pathname === "/dashboard/profile"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6"
            } px-3 py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}
          >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <div
            onClick={logout}
            className={`px-3  py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}
          >
            <span className="text-xl">
              <IoLogOutOutline />
            </span>
            <span>Logout</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
