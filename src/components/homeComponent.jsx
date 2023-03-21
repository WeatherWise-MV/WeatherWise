import styled, { keyframes } from "styled-components";

const animateBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const WeatherBackground = styled.div`
  display: flex;
  justify-content: center; /* horizontally center the content */
  align-items: center; /* vertically center the content */
  height: 100vh;
  background: linear-gradient(-45deg, #ff9966, #ff5e62, #ff9966, #d9af8f);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* horizontally center the content */
  align-items: center; /* vertically center the content */
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const HomeLabel = styled.span`
    color: black;
    margin: 20px auto;
    font-size: 18px;
    font-weight: bold;
`;

export const SearchLocationLabel = styled.span`
    color: black;
    margin: 10px auto;
    font-size: 18px;
    font-weight: bold;
`;

export const SearchButton = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;
