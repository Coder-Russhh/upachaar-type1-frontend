import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import doctorbg from "../../assets/HomeImg/doctorbg.jpg"

const DoctorSignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/doctors/doctor-login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success=== true) {
        const doctorId = response.data.doctorId;
        navigate(`/doctor/home/${doctorId}`);
      }
    } catch (error) {
      if (error.response.data.status === 403) {
        navigate("/access-restricted");
      } else {
        console.error("Error during signup:", error);
        alert("Error during signup. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center" style={{ backgroundImage: `url(${doctorbg})`, backgroundSize: 'cover' }}>
    <div className="my-8 p-6 rounded-2xl w-full md:w-2/3 lg:w-1/2 xl:w-1/3 border-white text-white bg-color border-2 ">
      <h2 className="text-2xl font-bold mb-4">Doctor Sign Up</h2>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>

          <label className="block mb-2">
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 mb-2 rounded-md w-full hover:bg-blue-500"
          >
            Sign In
          </button>
        </form>
        <div>
          <h1 className="">
            Already have an account?{" "}
            <Link to="/doctor/sign-up">
              <span className="text-blue-500 font-bold">Sign Up</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignIn;
