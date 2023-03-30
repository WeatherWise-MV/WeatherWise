import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';


const ChartContainer = styled.div`
  width: 95%;
  height: 300px;
  padding: 1rem;
`;

const RainChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx,{
      type: 'bar',
      data: {
        labels: ['9 PM', '10 PM', '11 PM', '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM'],
        datasets: [{
          label: 'Rain',
          indexAxis: 'y',
          data: data,
          borderRadius: 100,
          borderSkipped: false,
          backgroundColor: [
            'rgba(2,204,254)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <ChartContainer>
      <canvas ref={canvasRef} />
      <div>Light Rain  Rain  Heavy Rain</div>
    </ChartContainer>
  );
};

export default RainChart;
