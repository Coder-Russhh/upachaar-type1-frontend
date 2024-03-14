import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StaffHeader from "../../components/StaffComp/StaffHeader";
import girl1 from "../../assets/HomeImg/girl1.jpg";

const StaffMainProfile = () => {
  const [staffData, setStaffData] = useState(null);
  const { doctorId } = useParams();
  const { staffId } = useParams();

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get(
          `/api/doctors/${doctorId}/staff/${staffId}`
        );
        console.log(response.data.data);
        setStaffData(response.data.data.staffMember);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchStaffData();
  }, [doctorId, staffId]);

  return (
    <>
      <StaffHeader />

      {staffData && (
        <div className="h-[25vh] md:h-[50vh] flex items-center justify-evenly bg-color m-4 rounded-2xl">
          <div className="h-[75%] md:h-[75%] w-1/3 ">
            <img src={girl1} alt="Staff" className=" w-full md:w-1/2 h-full rounded-full" />
          </div>
          <div className="text-center md:text-left bg-white font-bold md:mr-32 rounded-lg">
           <div className="flex items-center my-2 md:my-6">
           <h2 className="text-sm mx-2 md:text-2xl font-semibold">Staff Id:</h2>
            <p className="text-xs mx-2 md:text-xl text-gray-600">{staffData.staffId}</p>
           </div>
           <div className="flex items-center my-2 md:my-6">
           <h2 className="text-sm mx-2 md:text-2xl font-semibold">Doctor Id:</h2>
            <p className="text-xs mx-2 md:text-xl text-gray-600">{staffData.doctorId}</p>
           </div>
           <div className="flex items-center my-2 md:my-6">
           <h2 className="text-sm mx-2 md:text-2xl font-semibold">Username:</h2>
            <p className="text-xs mx-2 md:text-xl text-gray-600">{staffData.username}</p>
           </div>
           <div className="flex items-center my-2 md:my-6">
           <h2 className="text-sm mx-2 md:text-2xl font-semibold">Email:</h2>
            <p className="text-xs mx-2 md:text-xl text-gray-600">{staffData.email}</p>
           </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffMainProfile;
