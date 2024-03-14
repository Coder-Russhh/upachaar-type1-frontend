import React, { useState } from "react";
import patient1 from "../../assets/PatientImg/patient1.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPatient } from "../../redux/patient/patientSlice";
import { Link } from "react-router-dom";

const PatientSignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/patients/patient-register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response)
      if (response.data.success === true) {
        const data = response.data;
        // Dispatch the setPatient action to update the Redux store
        dispatch(setPatient(data));
        navigate("/patient/sign-in");
      } else {
        const errorData = response.data;
        console.error("Signup failed:", errorData);
        setError(errorData.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setError("An error occurred during signup.");
    }
  };
  return (
    <div
      className="h-[100vh] flex justify-between items-center bg-cover  bg-center px-16 relative"
      style={{ backgroundImage: `url(${patient1})` }}
    >
      <div className="md:w-1/4 text-white mx-auto mt-8 px-6 py-2 rounded-2xl border-white border-2 bg-color">
        <h2 className="text-2xl font-bold md:mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <label className="block md:mb-2">
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>
          <br />
          <label className="block  md:mb-2">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>
          <br />
          <label className="block  md:mb-2">
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-300 text-black"
            />
          </label>
          <br />
          <label className="block md:mb-2">
            Gender:
            <select
              name="gender"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-2 mb-2 rounded-md w-full hover:bg-blue-500"
          >
            Sign Up
          </button>
        </form>
        <h1 className="">
          Already have an account?{" "}
          <Link to="/patient/sign-in">
            <span className="text-blue-500 hover:underline font-bold">Sign In</span>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default PatientSignUp;
