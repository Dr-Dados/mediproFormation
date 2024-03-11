import { HiAcademicCap, HiMiniPencil } from "react-icons/hi2";
import { IoLogOut, IoSettingsOutline } from "react-icons/io5";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" shadow-2xl h-full text-white p-4 m-3 rounded-lg bg-gray-100 flex flex-col items-center">
      <img src="/logo.png" alt="" className="w-24 h-24 my-10" />
      <Menu />
    </div>
  );
};

function Menu() {
  return (
    <nav>
      <ul className="navlist">
        
        <NavLink to="/" className="navlink">
          <IoSettingsOutline />
          Accueil
        </NavLink>

        <NavLink to="courses" className="navlink">
          <HiAcademicCap />
          Formations
        </NavLink>

        <NavLink to="quiz" className="navlink">
          <HiMiniPencil />
          Quiz
        </NavLink>

        <NavLink to="profile" className="navlink">
          <IoSettingsOutline />
          Profil
        </NavLink>

        <NavLink to="/" className="navlink">
          <IoLogOut />
          Se déconnecter
        </NavLink>
      </ul>
    </nav>
  );
}
export default Sidebar;
