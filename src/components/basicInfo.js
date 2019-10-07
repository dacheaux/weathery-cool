import React, { Component } from "react";
import Chart from "./chart.js";
import { getIconDescription, timeSince, iconUrls } from "../utils";

class basicInfo extends Component {
  state = { updatedAgo: timeSince(this.props.lastUpdated) };

  componentDidMount() {
    const { lastUpdated } = this.props;
    this.timer = setInterval(() => {
      this.setState({ updatedAgo: timeSince(lastUpdated) });
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  refreshData = async () => {
    const { currentCity, lastUpdated, fetchWeather } = this.props;
    await fetchWeather(currentCity);
    this.setState({ updatedAgo: timeSince(lastUpdated) });
  };

  render() {
    const { today, lastUpdated } = this.props;
    const { src, description } = getIconDescription(today.weather);
    return (
      <div className="basic">
        <div className="box current">
          <span className="value">{Math.round(today.temp)}°</span>
          <span className="description">{description}</span>
        </div>
        <div className="box">
          <div className="icon">
            <img src={src} alt={description} />
          </div>
        </div>
        <div className="animate-graph">
          <Chart viewBox="0 240 500 500" preserveAspectRatio="none" />
        </div>
        <div className="refresh description" onClick={this.refreshData}>
          <img src={iconUrls.refresh} width={18} alt={description} />
          Updated <span className="value">{timeSince(lastUpdated)}</span> ago
        </div>
      </div>
    );
  }
}

export default basicInfo;
