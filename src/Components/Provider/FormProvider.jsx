import React, { createContext, useEffect, useState } from 'react';
export   const formContext = createContext(null);

const FormProvider = ({children}) => {
  const [cityName, setCityName] = useState(localStorage.getItem("selectedCity" || ""));
  const cityValue = {
    cityName, setCityName
  }
  useEffect(()=> {
    localStorage.setItem("selectedCity", cityName)
  },[cityName]);

    return (
       <formContext.Provider value={cityValue}>{children}</formContext.Provider>
    );
};

export default FormProvider;