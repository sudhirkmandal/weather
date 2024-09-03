import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 32.05,
    tempMin: 32.05,
    tempMax: 32.05,
    humidity: 79,
    description: "mist",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result)
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
