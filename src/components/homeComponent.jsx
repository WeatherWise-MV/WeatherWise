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

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blinkingCursor = keyframes`
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
  99.99% {
    border-color: white;
  }
`;

export const WeatherBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(-45deg, #4b6cb7, #1CB5E0, #4b6cb7, #1CB5E0);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeLabel = styled.span`
  display: flex;
  color: white;
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.125rem solid white;
  animation: ${typingAnimation} 4s steps(100, end),
             ${blinkingCursor} 1s step-end infinite;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 23.75rem;
  padding: 1.25rem 0.625rem;
  margin: auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.1875rem 0.375rem 0 #555;
  background: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SearchLocationLabel = styled.span`
  color: black;
  margin: 0.625rem auto;
  font-size: 1.125rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
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

export const SettingsButton = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none !imp;
`;

export const SettingsText = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
  text-decoration: none !important;
  color: white;
`;

