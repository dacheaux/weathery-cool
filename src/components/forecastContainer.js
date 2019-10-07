import React from "react";
import { getIconDescription } from "../utils";

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default ({ cities, currentCity, forecast, today, onFetchWeather }) => {
  const forecastList = forecast.map(d => {
    const { src, description } = getIconDescription(d.weather);
    const day = days[new Date(d.datetime).getDay()];
    return (
      <div className="forecast">
        <div className="center">
          <span className="value">{d.temp}°</span>
        </div>
        <div className="edge">
          <img className="icon" src={src} alt={description} />
          {day}
        </div>
      </div>
    );
  });
  const month = months[new Date(today.ob_time).getMonth()];
  const day = today.ob_time && today.ob_time.slice(8, 10);
  const style = { backgroundImage: `url(${currentCity.image})` };
  return (
    <div key={currentCity.image} className="forecast-container">
      <div className="forecast-bg" style={style} />
      <div className="header">
        <div className="location">
          <div className="dropdown">
            {cities.map(city => (
              <h2 className="city" onClick={() => onFetchWeather(city)}>
                {city.name}
              </h2>
            ))}
          </div>
          <i className="arrow" />
        </div>
        <p className="date">
          {day} {month}
        </p>
      </div>

      <div className="forecast-table">
        <div className="forecast-bg-blur" style={style} />
        {forecastList}
      </div>
    </div>
  );
};
