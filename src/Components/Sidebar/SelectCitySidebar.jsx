import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Form from "../Form";
import { FaAngleDown } from "react-icons/fa6";
import logo from "../../Assests/logo.svg";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

const SelectCitySidebar = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  })
  const districts = [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Khagaria",
    "Kishanganj",
    "Kaimur",
    "Katihar",
    "Lakhisarai",
    "Madhubani",
    "Munger",
    "Madhepura",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Sheohar",
    "Sheikhpura",
    "Saran",
    "Sitamarhi",
    "Supaul",
    "Siwan",
    "Vaishali",
    "West Champaran",
  ];

  // Dropdown functionality
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCities, setFilteredCities] = useState(districts);
  const [selectedCity, setSelectedCity] = useState("");

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          reverseGeocode(latitude, longitude);
        },
        (error) => {
          console.log("Error getting location: " + error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const reverseGeocode = async (latitude, longitude) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f1ac6bd91a45445b99ef1b27b53364b8`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        const cityName =
          data.results[0].components.city || data.results[0].components.town || data.results[0].components._normalized_city || data.results[0].components.state_district;

        if(cityName){
          setSelectedCity(cityName);
        localStorage.setItem("selectedCity", cityName);
        }
      } else {
        console.log("Could not determine city.");
      }
    } catch (error) {
      console.log("Error fetching city data: " + error.message);
    }
  };

  useEffect(() => {
    handleGetLocation();

    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeDrawer = () => {
    const isSidebarOpen = document.getElementById("my-drawer-3");
    if (isSidebarOpen) {
      isSidebarOpen.checked = false;
    }
  };

  const handleInputChange = (value) => {
    setSearchInput(value);
    const filtered = districts.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleCityClick = (city) => {
    setSearchInput(city);
    setSelectedCity(city);
    setFilteredCities(filteredCities);
    localStorage.setItem("selectedCity", city);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="drawer-button cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 w-36 justify-end">
              <FaLocationDot className="text-white"></FaLocationDot>
              <p className="text-white">
                {selectedCity === "null" ? "Select City" : selectedCity}
              </p>
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="w-80 min-h-full bg-white text-base-content">
          <div className="bg-teal-500 p-3 sticky top-0">
            <div className="flex items-center justify-between">
              <Link to={"/"}>
                <img className="" src={logo} alt="logo" />
              </Link>

              <RxCross2
                onClick={closeDrawer}
                className="text-white text-3xl cursor-pointer"
              ></RxCross2>
            </div>
          </div>

          <div className="sticky top-[90px] bg-white pb-4 z-30 px-4">
            <h1 className="text-xl font-semibold text-teal-500 pt-2 pb-3 flex items-center gap-2">
              Select your City <FaAngleDown></FaAngleDown>
            </h1>

            {/* Content here */}
            <div className="">
              <input
                value={searchInput}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Find Your City"
                type="text"
                className="bg-gray-50 p-3 rounded-lg w-full outline-none focus:border-teal-400 transition duration-300 border hover:border-teal-600"
              />
            </div>
          </div>

          <div className="px-4">
            {filteredCities.map((city, index) => (
              <p
                onClick={() => handleCityClick(city)}
                key={index}
                className="text-gray-500 font-semibold border-b border-gray-300 pb-1 mb-2 cursor-pointer"
              >
                {city}
              </p>
            ))}
          </div>

          <div className="hidden">{selectedCity && <Form />}</div>

          <div className="p-4"></div>
        </ul>
      </div>
    </div>
  );
};

export default SelectCitySidebar;
