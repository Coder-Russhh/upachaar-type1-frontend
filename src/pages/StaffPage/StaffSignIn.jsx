import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import doctorStaff from "../../assets/HomeImg/doctor3.jpg";
import { IoArrowBack } from "react-icons/io5";

const StaffSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { staffId } = useParams();

  const handleSignIn = async () => {
    try {
      const response = await fetch(`/api/staff/staff-login/${staffId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, doctorId, staffId }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate(`/staff/profile/${doctorId}/${staffId}`);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error during staff login:", error);
    }
  };

  return (
    <div className="relative h-[100vh] ">
      {/* Background image for medium screens and above */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${doctorStaff})` }}
      ></div>

      {/* Form container */}
      <div className="container h-full mx-auto flex flex-col justify-end items-center py-8 relative z-10">
        <div className="max-w-md w-full bg-color border-2 border-white text-white shadow-md rounded-lg p-4 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Staff Sign In</h2>
          <div className="mb-4">
            <label className="block text-sm mb-1">Email:</label>
            <input
              type="text"
              className="w-full border p-2 rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Password:</label>
            <input
              type="password"
              className="w-full border p-2 rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Doctor ID:</label>
            <input
              type="text"
              className="w-full border p-2 rounded text-black"
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 w-full"
            >
              Sign In
            </button>
          </div>
          <Link to="/staff/staffId">
            <div className="flex items-center bg-slate-600 gap-2 justify-center mt-4 p-1">
              <h1 className="text-center">Go back to Staff Id</h1>
              <span>
                <IoArrowBack />
              </span>
            </div>
          </Link>
          {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default StaffSignIn;
