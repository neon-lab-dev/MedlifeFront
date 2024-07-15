import { useState } from "react";



const CityDropdown = ({ onCityChange, type }) => {
  const [selectedCity, setSelectedCity] = useState("");

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

  return (
    <>
      {type === "city" && (
        <div className="w-full overflow-hidden flex gap-4 overflow-x-scroll ">
          {districts.map(
            (city, ind) =>
              ind !== 0 && (
                <div
                  className="border border-gray-50 rounded-md flex justify-center items-center h-10 px-2 w-full cursor-pointer text-nowrap"
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
