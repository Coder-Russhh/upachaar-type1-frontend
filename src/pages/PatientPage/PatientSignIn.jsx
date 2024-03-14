import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPatient } from "../../redux/patient/patientSlice";
import axios from "axios";
import patient1 from "../../assets/PatientImg/patient1.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const PatientSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/patients/patient-login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success === true) {
        const patientId = response.data.patientId;
        // Dispatch the setPatient action to update the Redux store
        dispatch(setPatient(patientId));
        navigate(`/patient/home/${patientId}`);
      } else {
        const errorData = response.data;
        console.error("Login failed:", errorData);
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login.");
    }
  };

  return (
    <div
      className="h-[100vh] flex justify-between items-center bg-cover bg-center px-16 relative"
      style={{ backgroundImage: `url(${patient1})` }}
    >
      <div className="max-w-md mx-auto mt-8 p-6 rounded-2xl border-white bg-color text-white border-2">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleLogin}>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>
          <br />
          <label className="block mb-2">
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>
          <br />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 mb-2 rounded-md w-full hover:bg-blue-500"
          >
            Sign In
          </button>
        </form>
        <h1 className="">
          Already have an account?{" "}
          <Link to="/patient/sign-up">
            <span className="text-blue-500 font-bold">Sign Up</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PatientSignIn;
