import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import DoctorSearch from "./DoctorSearch";
import axios from "axios";

const PatientHeader = () => {
  const { patientId } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCross = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`/api/patients/get/${patientId}`);
        setPatientName(response.data.data.username);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <div className="flex items-center justify-between p-2 bg-color text-white">
      <div className="flex items-center">
        {/* Hamburger menu toggle button */}
        <div className="cursor-pointer" onClick={handleMenuToggle}>
          {/* {showMenu ? <FiX size={24} /> : <FiMenu size={24} />} */}
          <FiMenu size={24} />
        </div>

        {/* Menu options */}
        {showMenu && (
          <>
            <div
              className="absolute opacity-30 bg-black text-black h-[100vh] w-[100vw] top-0 left-0 z-[12]"
              onClick={handleCross}
            ></div>

            <div className="relative">
              <div className="bg-color z-[12] text-white text-center absolute top-0 left-0  md:h-[30vh] md:w-[20vw] w-[50vw] flex justify-between">
                <div className=" w-full">
                  <Link to={`/patient/home/${patientId}`}>
                    <p className="cursor-pointer my-2  md:mt-4 hover:bg-gray-400">
                      Home
                    </p>
                  </Link>
                  <Link to={`/patient/appointmentsrecord/${patientId}`}>
                    <p className="cursor-pointer mb-2 hover:bg-gray-400">
                      Appointments Record
                    </p>
                  </Link>
                  <Link to={`/patient/healthfeed/${patientId}`}>
                    <p className="cursor-pointer mb-2 hover:bg-gray-400">
                      HealthFeed
                    </p>
                  </Link>
                  <Link to={`/patient/medicalhistory/${patientId}`}>
                    <p className="cursor-pointer mb-2 hover:bg-gray-400">
                      Medical History
                    </p>
                  </Link>
                  <Link to={`/patient/healthmetrics/${patientId}`}>
                    <p className="cursor-pointer mb-2 hover:bg-gray-400">
                      Health Metrics
                    </p>
                  </Link>
                  <p className="cursor-pointer mb-2 hover:bg-gray-400">
                    Sign Out
                  </p>
                </div>
                <div onClick={handleCross}>
                  <FiX size={24} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Welcome user heading */}
      <Link to={`/patient/home/${patientId}`}>
      <h2 className="text-2xl md:block hidden">Welcome, {patientName}!</h2>
      </Link>

      {/* Search bar */}
      <DoctorSearch />

      {/* <Link to={`/doctor/notifications/${doctorId}`}>
        </Link> */}
      <div>
        <IoNotifications size={24} />
        {notificationCount > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-1">
            {notificationCount}
          </span>
        )}
      </div>

      {/* User profile icon */}
      <Link to={`/patient/patientprofile/${patientId}`}>
      <FiUser size={24} />
      </Link>
    </div>
  );
};

export default PatientHeader;
