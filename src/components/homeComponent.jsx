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
  width: 23.75rem;
  padding: 1.25rem 0.625rem;
  margin: auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.1875rem 0.375rem 0 #555;
  background: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const HomeLabel = styled.span`
  color: black;
  margin: 1.25rem auto;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const SearchLocationLabel = styled.span`
  color: black;
  margin: 0.625rem auto;
  font-size: 1.125rem;
  font-weight: bold;
`;

export const SearchButton = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1.25rem;
  border: black solid 1px;
  border-radius: 2px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  & input {
    padding: 0.625rem;
    font-size: 0.875rem;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    background-color: black;
    font-size: 0.875rem;
    padding: 0 0.625rem;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;
