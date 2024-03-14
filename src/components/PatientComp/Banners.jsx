import React from "react";
import Slider from "react-slick";
import patient1 from "../../assets/PatientImg/patient1.jpg";
import patient2 from "../../assets/PatientImg/patient2.jpg";
import ban1 from "../../assets/PatientImg/banner/ban1r.jpg";
import ban2 from "../../assets/PatientImg/banner/ban2r.jpg";
import ban3 from "../../assets/PatientImg/banner/ban3r.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex justify-center  m-8 rounded-3xl  ">
      <Slider {...settings} className=" md:h-[50vh] h-[25vh] w-[75vw] ">
        <div className="">
          <img src={ban1} alt="" className="rounded-3xl md:h-[50vh] h-[25vh] w-full" />
        </div>
        <div className="">
          <img src={ban2} alt="" className="rounded-3xl md:h-[50vh] h-[25vh] w-full " />
        </div>
        <div className="">
          <img src={ban3} alt="" className="rounded-3xl md:h-[50vh] h-[25vh] w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Banners;
