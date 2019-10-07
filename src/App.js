import React, { Component } from "react";
import axios from "axios";
import { listOfCities } from "./utils";

import BasicInfo from "./components/basicInfo";
import DetailedInfo from "./components/detailedInfo";
import ForecastContainer from "./components/forecastContainer";

const API_KEY = "32843ca13f7643a0a3b844866635faf1";
const FORECAST_URL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&days=7&city=`;
const TODAY_URL = `https://api.weatherbit.io/v2.0/current?key=${API_KEY}&city=`;

class App extends Component {
  state = {
    cities: [...listOfCities],
    currentCity: listOfCities[0],
    forecast: [],
    today: {},
    lastUpdated: Date.now()
  };

  componentDidMount() {
    const { currentCity } = this.state;
    this.fetchWeather(currentCity);
  }

  fetchWeather = async city => {
    const { cities, currentCity } = this.state;
    let newCityList = [...cities];
    if (city.name !== currentCity.name) {
      newCityList.reverse();
    }
    try {
      const [forecast, today] = await Promise.all([
        axios.get(`${FORECAST_URL}${encodeURI(city.name)},rs`),
        axios.get(`${TODAY_URL}${encodeURI(city.name)},rs`)
      ]);
      this.setState({
        cities: newCityList,
        currentCity: city,
        forecast: forecast.data.data,
        today: today.data.data[0],
        lastUpdated: Date.now()
      });
    } catch (e) {}
  };

  render() {
    const { cities, currentCity, today, forecast, lastUpdated } = this.state;
    return (
      <div className="container">
        <div className="info">
          <BasicInfo
            today={today}
            lastUpdated={lastUpdated}
            currentCity={currentCity}
            fetchWeather={this.fetchWeather}
          />
          <DetailedInfo today={today} />
        </div>
        <ForecastContainer
          cities={cities}
          currentCity={currentCity}
          today={today}
          forecast={forecast}
          onFetchWeather={this.fetchWeather}
        />
      </div>
    );
  }
}

export default App;
