import React from 'react';
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from 'react-chartjs-2';
function Graph(chartData) {
    return <Line data={chartData} />;
}

export default Graph;