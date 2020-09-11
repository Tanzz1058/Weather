import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
import Search from "./Search";
import Results from "./Results";

const Weather = () => {
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState("backgrnd");

  const onSearch = (v) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=c0ae38f85cf20362c16d54ed0e88f312`
      )
      .then((response) => {
        setData({
          id: response.data.name,
          weather: response.data.weather[0].main,
          temp: response.data.main.temp,
          humidity: response.data.main.humidity,
          clouds: response.data.clouds.all,
          max: response.data.main.temp_max,
          min: response.data.main.temp_min,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          icon: response.data.weather[0].icon
        });
        setWeather(response.data.weather[0].main);
      })
      .catch((error) => {
        alert("Invalid input!");
      });
  };

  return (
    <div
      className={weather}
      style={{
        height: "100vh",
        backgroundSize: "cover",
        top: "0",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Search onSearch={(v) => onSearch(v)} />
      <Results data={data} />
      <a href = 'https://github.com/Tanzz1058'><img alt = 'github' className = "image" src = 'https://image.flaticon.com/icons/svg/25/25231.svg'/></a>
    </div>
  );
};

export default Weather;
