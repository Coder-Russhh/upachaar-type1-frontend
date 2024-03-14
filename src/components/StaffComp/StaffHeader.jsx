import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import axios from "axios";

const StaffHeader = () => {
  const { doctorId, staffId } = useParams();
  const [showMenu, setShowMenu] = useState(false);
  const [staffName, setStaffName] = useState("");

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleCross = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get(
          `/api/doctors/${doctorId}/staff/${staffId}`
        );
        setStaffName(response.data.data.staffMember.username);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchStaffData();
  }, [staffId]);

  return (
    <>
      <div className="flex items-center justify-between p-2 bg-color text-white">
        <div className="flex items-center">
          {/* Hamburger menu toggle button */}
          <div className="cursor-pointer" onClick={handleMenuToggle}>
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
                <div className="bg-color border-2 border-white z-[12] text-white absolute top-4 left-2 h-[25vh] w-[50vw] md:w-[20vw] flex justify-between">
                  <div className="flex flex-col items-center justify-center w-full pl-4 gap-2">
                    <Link to={`/staff/profile/${doctorId}/${staffId}`}>
                      <p className="cursor-pointer mb-2 hover:bg-gray-400">
                        Staff Home
                      </p>
                    </Link>
                    <Link
                      to={`/staff/patientmanagement/${doctorId}/${staffId}`}
                    >
                      <p className="cursor-pointer mb-2 hover:bg-gray-400">
                        Patient Management
                      </p>
                    </Link>
                    <Link to={`/staff/staffhealthfeed/${doctorId}/${staffId}`}>
                      <p className="cursor-pointer mb-2 hover:bg-gray-400">
                        HealthFeed
                      </p>
                    </Link>
                    {/* patientId required h jaega-- */}
                    {/* <Link to={`/doctor/patientrecord/${doctorId}`}>
                    <p className="cursor-pointer mb-2 hover:bg-gray-400">
                      Patient Record
                    </p>
                  </Link> */}
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
        <Link to={`/staff/profile/${doctorId}/${staffId}`}>
          <h2 className="text-2xl">Welcome, {staffName}!</h2>
        </Link>
        {/* Search bar */}
        {/* <DoctorSearch /> */}

        <div className="flex items-center gap-16">
          <Link to={`/doctor/notifications/${doctorId}`}>
            <IoNotifications size={24} />
          </Link>

          {/* User profile icon */}
          <Link to={`/staff/staffmainprofile/${doctorId}/${staffId}`}>
            <FiUser size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StaffHeader;
