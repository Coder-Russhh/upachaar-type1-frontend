import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import doctorImg from "../../assets/PatientImg/doctorImg.jpg";
import { useNavigate } from "react-router-dom";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const {patientId} = useParams();

  useEffect(() => {
    axios.get("/api/doctors").then((response) => {
      setDoctors(response.data);
    });
  }, []);

  const handleClinicConsult = (doctorId) => {
    navigate(`/patient/clinic/${patientId}/${doctorId}`);
  };

  const handleVideoConsult = (doctorId) => {
    navigate(`/patient/video/${patientId}/${doctorId}`);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-color mt-8 p-8 w-full">
      <h1 className="text-white font-bold text-3xl hover:underline">Doctors List</h1>
      {doctors && doctors.map((doctor) => (
        <div
          key={doctor._id}
          className=" md:h-[20vh] h-[12vh] w-full my-4 p-4  bg-white rounded-lg flex justify-between items-center"
        >
          {/* Doctor Image */}
          <img className="h-full  rounded-[50%] border-4 border-blue-800" src={doctorImg} alt="Doctor" />

          {/* Doctor Information */}
          <div className="text-xs md:text-lg font-bold">
            <h2>{doctor.username}</h2>
            <p>{doctor.speciality}</p>
            <p>{doctor.city}</p>
            <p>{doctor.qualification}</p>
            <p>{doctor.experience}</p>
          </div>
          {/* Consult Now Button */}
          <div className="h-full mr-8 flex flex-col md:py-4 justify-start items-center gap-4">
            <div className=" bg-blue-700 px-2 py-1  text-white font-bold md:text-lg text-xs rounded-lg">
              <button onClick={() => handleClinicConsult(doctor._id)}>
                Clinic Consult
              </button>
            </div>
            <div className=" bg-purple-700  px-2 py-1  text-white font-bold md:text-lg text-xs rounded-lg">
              <button onClick={() => handleVideoConsult(doctor._id)}>
                Video Consult
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
