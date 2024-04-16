// src/views/Home.js
import React from "react";
import DefaultSidebar from "../ui/Sidenav";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";
import { courses, quizes } from "/data/FData";
import { CourseProvider } from "../context/CourseProvider";
const Home = () => {
  return (
    <CourseProvider>
      <div className="grid grid-cols-[17%_1fr] h-screen">
        <DefaultSidebar />
        <div className="grid grid-rows-[5%_1fr_5%]">
          <Navbar />
          <div className="py-12 px-10">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </CourseProvider>
  );
};

export default Home;
