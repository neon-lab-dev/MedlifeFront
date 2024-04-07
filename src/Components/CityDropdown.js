import React, { useState } from "react";

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
  "West Champaran"
]

const CityDropdown = ({ onCityChange, type }) => {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <>
      {type === "city" && (
        <div className="cities-scroll w-full">
          {districts.map(
            (city, ind) =>
              ind !== 0 && (
                <div
                  className="border rounded-md flex justify-center items-center h-10 px-2 cursor-pointer"
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    onCityChange(city);
                  }}
                >
                  {city}
                </div>
              )
          )}
        </div>
      )}
    </>
  );
};

export default CityDropdown;
