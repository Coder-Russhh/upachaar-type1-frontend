import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInAs = () => {
  return (
    <div id="provider" className="h-[70vh] rounded-2xl md:p-8 p-4 bg-color text-white">
      <div className="h-[40vh] flex flex-col justify-start items-center rounded-2xl">
        <h1 className="md:text-3xl md:block hidden text-xl font-serif md:mt-8 mt-0">
          Consultation With Our Best Doctors
        </h1>
        <h1 className="md:text-3xl md:block hidden text-xl font-serif">
          And Get Quick & Better Treatment
        </h1>
        <h1 className="md:hidden md:text-3xl text-xl font-serif md:mt-8 mt-0 ">Consultation With Our Best Doctors And Get Better Treatment</h1>
        <div className="flex md:mt-12 mt-4 w-full justify-between items-center">
          {/* left qualities */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>Comfortable</h4>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>High Quality</h4>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>Easy To Use</h4>
            </div>
          </div>
          {/* right qualities */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>100% Valid</h4>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>Real Time </h4>
            </div>
            <div className="flex items-center gap-2">
              <span>
                <FaRegCheckCircle color="green" size={15} />
              </span>
              <h4>24/7 Open </h4>
            </div>
          </div>
        </div>
      </div>
      {/* signInAs */}
      <div className="md:h-[30vh] h-[25vh] bg-white border-blue-800 border-2 flex flex-col gap-4 justify-center items-center rounded-2xl mt-4 font-bold">
        <Link
          className="bg-gradient-to-r text-white md:px-4 py-2 mb-2 rounded-md md:w-1/2 w-[75%] from-blue-700 to-blue-900 hover:text-white hover:scale-105 text-center"
          to="/patient/sign-up"
        >
          Join as Patient
        </Link>
        <Link
          className="bg-gradient-to-r text-white md:px-4 py-2 mb-2 rounded-md md:w-1/2 w-[75%] from-blue-700 to-blue-900 hover:text-white hover:scale-105 text-center"
          to="/doctor/sign-up"
        >
          Join as Doctor
        </Link>
        <Link
          className="bg-gradient-to-r text-white md:px-4 py-2 mb-2 rounded-md md:w-1/2 w-[75%] from-blue-700 to-blue-900 hover:text-white hover:scale-105 text-center"
          to="/staff/staffId"
        >
          Join as Staff
        </Link>
      </div>
    </div>
  );
};

export default SignInAs;
