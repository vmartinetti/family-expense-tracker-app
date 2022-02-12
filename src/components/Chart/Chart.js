import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const totalMaximun = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={totalMaximun}/>
      ))}
    </div>
  );
};

export default Chart;
