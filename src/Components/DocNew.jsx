import { HiLocationMarker } from "react-icons/hi";
import { IoBagAdd } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipperbtn from "./Swipperbtn";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import useAxiosBaseUrl from "../hooks/useBaseUrl";
import Loader from "./Loader/Loader";



const DocNew = ({ docHeading, diseaseName }) => {
    const [loading, setLoading] = useState(true);


    const axiosBaseUrl = useAxiosBaseUrl();
  
    // Data fetch from API
  
    const [allDoctors, setAllDoctors] = useState([]);
    useEffect(() => {
      axiosBaseUrl
        .get(`/api/v1/doctors?diseaseHandle=${diseaseName}`)
        .then((res) => res.data)
        .then((data) => {
          setAllDoctors(data.doctors);
          setLoading(false);
        })
        .catch((err) => console.log(err.message));
    }, [diseaseName]);
    

    return (
        <div>
          {
            allDoctors.length <= 2 ? (
              <div className="rev-cards-cont flex justify-center">
            {loading ? (
              <Loader></Loader>
            ) : allDoctors.length > 0 ? (
              allDoctors.map((doctor) => (
                <div key={doctor._id} className="dd-card">
                  <div className="dd-top">
                    <div className="dd-top-left mr-2">
                      <img src={doctor.avatar.url} alt="ddrc" />
                    </div>
                    <div className="dd-top-right">
                      <div className="dd-top-head">{doctor.doctorName}</div>
                      <div className="dd-top-text">
                        {" "}
                        MBBS, MS-{" "}
                        <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                          {doctor.diseaseHandle}
                        </b>
                      </div>
                      <div className="bg-gray-500 w-52 h-0.5">
  
                      </div>
                      <div className="dd-top-sub-head"> Specialization</div>
                      <div className="dd-top-sp-cont">
                        <div className="dd-top-sp text-base text-gray-800">
                          {doctor.specialization1}
                        </div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
                      </div>
                      <div className="dd-top-stats-cont">
                        <div className="dd-top-stats">
                        <IoBagAdd></IoBagAdd>
                          {doctor.experience}
                        </div>
                        <div className="dd-top-stats">
                        <HiLocationMarker></HiLocationMarker>         {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dd-btm">
                    <div className="dd-call">Call now +91 995 599 2502</div>
                    <div className="dd-book">Book Appointment</div>
                  </div>
                </div>
              ))
            ) : (
              <p>No Doctor available</p>
            )}
          </div>
            )
            :
            (
<div className="flex justify-center relative py-[12px]">
            <Swiper
        slidesPerView={1}
        breakpoints={{
          700: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1666: {
            slidesPerView: 3,
          },
          1366: {
            slidesPerView: 3,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="carousel"
      >
               {loading ? (
              <Loader></Loader>
            ) : allDoctors.length > 0 ? (
              allDoctors.map((doctor) => (
                <SwiperSlide key={doctor._id} className="dd-card">
                  <div className="dd-top">
                    <div className="dd-top-left mr-2">
                      <img src={doctor.avatar.url} alt="ddrc" />
                    </div>
                    <div className="dd-top-right">
                      <div className="dd-top-head">{doctor.doctorName}</div>
                      <div className="dd-top-text">
                        {" "}
                        MBBS, MS-{" "}
                        <b style={{ color: "#00A0AA", fontSize: "17px" }}>
                          {doctor.diseaseHandle}
                        </b>
                      </div>
                      <div className="bg-gray-500 w-52 h-0.5">
  
                      </div>
                      <div className="dd-top-sub-head"> Specialization</div>
                      <div className="dd-top-sp-cont">
                        <div className="dd-top-sp text-base text-gray-800">
                          {doctor.specialization1}
                        </div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization2}</div>
                        <div className="dd-top-sp text-gray-800">{doctor.specialization3}</div>
                      </div>
                      <div className="dd-top-stats-cont">
                        <div className="dd-top-stats">
                        <IoBagAdd></IoBagAdd>
                          {doctor.experience}
                        </div>
                        <div className="dd-top-stats">
                        <HiLocationMarker></HiLocationMarker>         {doctor.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dd-btm">
                    <div className="dd-call">Call now +91 995 599 2502</div>
                    <div className="dd-book">Book Appointment</div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>No Doctor available</p>
            )}

                

                <div className="absolute top-[40%] w-[100%] z-10">
          <Swipperbtn></Swipperbtn>
        </div>
            </Swiper>




        </div>
            )
          }
        </div>
    );
};

export default DocNew;