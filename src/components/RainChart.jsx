import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 1rem;
`;

const API_KEY = '5eb3443a85dd092f1a29ccb357130b4a';

const RainChart = ({ queryCity }) => {
  const canvasRef = useRef(null);
  const [rainPercentage, setRainPercentage] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        const rain = data.rain ? data.rain['1h'] : 0; // extract rain data from API response
        setRainPercentage(rain);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, [queryCity]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: new Array(8)
          .fill()
          .map((_, i) => {
            const date = new Date();
            date.setHours(date.getHours() + i + 0); // add 1 hour to current time
            return date.toLocaleString('en-US', { hour: 'numeric', hour12: true });
          }),
        datasets: [
          {
            label: 'Rain',
            indexAxis: 'y', // set indexAxis to 'y' for horizontal bar chart
            data: [rainPercentage || 0, 0, 0, 0, 0, 0, 0, 0], // set rain percentage as the first data point
            borderRadius: 100,
            borderSkipped: false,
            backgroundColor: ['rgba(2,204,254)'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Chance of Rain (%)'
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 20,
              callback: function (value) {
                return value + '%';
              },
            },
            scaleLabel: {
              display: true,
              labelString: 'Chance of Rain',
            },
          },
        },
      },
    });

    const updateChart = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        const rain = data.rain ? data.rain['1h'] : 0; // extract rain data from API response
        setRainPercentage(rain); // update rain percentage in state
        const newLabels = new Array(8)
          .fill()
          .map((_, i) => {
            const date = new Date();
            date.setHours(date.getHours() + i + 0); // add 1 hour to current time
            const percentage = i === 0 ? rain || 0 : 0; // set first label to live rain percentage
            return `${date.toLocaleString('en-US', { hour: 'numeric', hour12: true })} (${percentage}%)`;
          });
        chart.data.datasets[0].data = [rain || 0, 0, 0, 0, 0, 0, 0, 0]; // update first data point with new rain percentage
        chart.data.labels = newLabels;
        chart.update();
      } catch (error) {
        console.error(error);
      }
    };

    // Update the chart every 5 minutes (300000 milliseconds)
    const intervalId = setInterval(updateChart, 300000);

    return () => {
      clearInterval(intervalId);
      chart.destroy();
    };
  }, [queryCity, rainPercentage]);

  return (
    <ChartContainer>
      <canvas ref={canvasRef} />
    </ChartContainer>
  );
};

export default RainChart;
