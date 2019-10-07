import React from "react";

export default ({ today }) => {
  const { rh, dewpt, uv, vis } = today;
  return (
    <div className="details">
      <div className="box">
        <span className="value">{rh}%</span>
        <span className="description">Humidity</span>
      </div>
      <div className="box">
        <span className="value">{dewpt}°</span>
        <span className="description">Dew Pt.</span>
      </div>
      <div className="box">
        <span className="value">{Math.round(uv)}/10</span>
        <span className="description">UV Index</span>
      </div>
      <div className="box">
        <span className="value">{vis && vis.toFixed(1)} km</span>
        <span className="description">Visibility</span>
      </div>
    </div>
  );
};
