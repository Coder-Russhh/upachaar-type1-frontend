import React from "react";

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-blue-800 p-8 border-2 border-t-blue-800">
      <div className="flex justify-between">
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">From Upchaar</h3>
          <ul>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
          <ul>
            <li>Join Us</li>
            <li>Benefits</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">For Patients</h3>
          <ul>
            <li>Find a Doctor</li>
            <li>Book Appointment</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">For Hospitals</h3>
          <ul>
            <li>Partner with Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <div>
          <h1 className=" my-2 text-lg font-semibold">Upchaar</h1>
        </div>
        <div >
          <h1 className="">&copy; {currentYear} Upchaar. All rights reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
