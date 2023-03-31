import styled from 'styled-components';

export const PopupContainer = styled.div`
  display: flex;
  top: ${props => props.navHeight + 10}px;
  right: 0;
  width: 40%;
  height: auto;
  align-items: center;
  margin-top: 3rem;
  background: #333;
  border-radius: 1rem;
  color: white;
  z-index: 2;
  overflow-y: scroll;
  
  @media (max-width: 767px) {
    width: 100%;
    top: ${props => props.navHeight + 60}px;
    height: calc(100vh - ${props => props.navHeight + 64}px);
  }
`;

export const Title = styled.h1`
  font-size: 24px;
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

export const TemperatureHigh = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3rem;
`;
export const TemperatureLow = styled.div`
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
  text-transform: capitalize;
  color: black;
`;

export const Condition = styled.div`
  font-size: 0.8rem;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

export const ForecastContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;


  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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
    justify-content: center;
    width: 45%;
    margin-bottom: 0.5rem;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: flex-start;
    }
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 35%;
    margin-bottom: 0.5rem;

    @media (max-width: 767px) {
      width: 100%;
      justify-content: flex-start;
    }
  }

  @media (max-width: 767px) {
    margin: 0.5rem 0;
    padding: 0.5rem;
    height: auto;
  }
`;
