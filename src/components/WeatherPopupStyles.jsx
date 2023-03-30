import styled from 'styled-components';

export const PopupContainer = styled.div`
font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 20vh;
  margin-top: 33.9%;
  right: 0vw;
  transform: translate(0, -50%);
  width: 30%;
  height: 160%;
  background-color: #f2f2f2;
  z-index: 2;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 10px;
  padding: 2rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ChartTitle = styled.h3`
  margin-top: 1rem;
`;

export const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 1rem;
  font-weight: bold;
`;

export const HighLow = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  position: relative;
  color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row-reverse;
`;

export const HighLowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Temperature = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3rem;
`;

export const TemperatureArrow = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.3rem;
  color: black;
`;

export const WeatherIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
`;

export const Condition = styled.div`
  font-size: 0.8rem;
  color: grey;
`;

export const ForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;


export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 1rem;
  width: 100%;
  background-color: #f7f7f7;
  background-image: linear-gradient(to right, rgba(2, 204, 254) 50%, #F2F2F2 50%);

  &:nth-child(odd) {
    background-color: rgba(2, 204, 254);
    color: #fff;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: centre; 
    width: 45%;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    width: 35%;
  }
`;
