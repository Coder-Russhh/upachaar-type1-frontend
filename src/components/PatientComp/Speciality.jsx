import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing the down and up arrow icons
import specialtiesData from "../../static/specialtiesData";

const Speciality = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-x-auto">
      <h1 className="text-xl md:text-3xl mb-8  font-bold text-color hover:underline md:mt-8">Choose Any Specific Category </h1>
      <div className=" my-2 grid grid-cols-3 md:grid-cols-6 gap-4">
        {specialtiesData.slice(0, showAll ? specialtiesData.length : 5).map((specialty) => (
          <div
            key={specialty.id}
            className="h-10 w-32 md:h-16 md:w-48 text-sm hover:scale-105  bg-color text-white rounded-full flex justify-center items-center"
          >
            {specialty.name}
          </div>
        ))}
        {!showAll ? (
          <div
            className="h-8 w-8 font-bold bg-color text-white rounded-full flex justify-center items-center cursor-pointer"
            onClick={toggleShowAll}
          >
            <FiChevronDown />
          </div>
        ) : (
          <div
            className="h-8 w-8 font-bold bg-color text-white rounded-full flex justify-center items-center cursor-pointer"
            onClick={toggleShowAll}
          >
            <FiChevronUp />
          </div>
        )}
      </div>
    </div>
  );
};

export default Speciality;
