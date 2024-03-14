import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Articles from "../../components/Articles";
import RatingReviews from "../../components/RatingReviews";
import "./LandingPage.css";
import SignInAs from "./SignInAs";
import signInDoctor1 from "../../assets/HomeImg/signInDoctor1.jpg";
import HomeDoctor3 from "../../assets/HomeImg/HomeDoctor3.jpg";
import group from "../../assets/HomeImg/group.png";
import ShowFeed from "../../components/ShowFeed";
import TopDoctors from "../../components/TopDoctors";
import Chatbot from "../../components/Chatbot";
import MainHeading from "./MainHeading";
import Services from "../../components/Services";
import ContactUs from "../../components/PatientComp/ContactUs";
import LandingHeader from "../../components/LandingHeader";

const LandingPage = () => {
  return (
    <>
      <div>
        <Chatbot />
        <LandingHeader />
        <MainHeading />

        {/* sign in as option */}
        <div className="mt-12">
          <div
            className="h-[100vh] bg-center flex justify-between items-center md:bg-cover md:bg-center-top px-16 relative"
            style={{ backgroundImage: `url(${signInDoctor1})` }}
          >
            <div className="md:w-[40%] w-[100%]">
              <SignInAs />
            </div>
            <RouterLink to="/patient/sign-up">
              <div className="absolute md:top-1/2 md:left-1/2 top-10 left-40 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-gradient-to-r from-blue-500 to-blue-700 square hover:from-blue-700 hover:to-blue-900">
                <div className="tilt text-white">Book Now</div>
              </div>
            </RouterLink>
          </div>
        </div>

        {/* our services */}
        <Services />
        {/* top specialist */}
        <TopDoctors />
        {/* showFeed */}
        <ShowFeed />

        {/* patients reviews and feedback */}
        <div className=" h-[90vh] flex md:flex-row flex-col justify-between items-center px-4 mt-4">
            <RatingReviews />
          <div
            className="h-[80vh] w-1/2 bg-cover bg-center md:block hidden transition-transform transform hover:scale-105"
            style={{ backgroundImage: `url(${group})` }}
          ></div>
        </div>
        {/* scroll for tips and blogs */}
        <Articles />

        {/* contact us */}
        <ContactUs />
      </div>
    </>
  );
};

export default LandingPage;
