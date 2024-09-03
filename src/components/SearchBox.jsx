import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

const SearchBox = ({updateInfo}) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "74ec4ce425784cce231dca65981f9612";

  let getWeatherInfo = async () => {
   try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        description:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;
   }catch(err){
    throw err;
   }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
   try {
    event.preventDefault();
    console.log(city);
    let info = await getWeatherInfo();
    updateInfo(info);   
    setCity("");
   } catch (error) {
    setError(error);    
   }
  };

  return (
    <div className="searchbox">
      <br />
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red", marginTop:"10px"}}>No such place exsists!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
