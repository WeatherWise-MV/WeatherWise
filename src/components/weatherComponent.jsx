import styled, { keyframes } from 'styled-components';

// --- BACKGROUND CONTENT --- //

// animation for the background gradient
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

// main container for the weather page
export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem);
  padding-top: 4rem;
  background: linear-gradient(45deg, #3465d9, #3f86ed, #4ba8ff, #5fd5ff, #a4f4ff);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
  position: relative; /* Add this line */
`;

// --- NAV BAR CONTENT --- //

// main nav container
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

// nav container
export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  left: 1rem;
`;

// search bar
export const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & input {
    padding: 0.5rem;
    font-size: 0.875rem;
    border: none;
    outline: none;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
  }

  & button {
    background-color: #333;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0 4px 4px 0;
  }
`;

// --- MAIN CONTENT --- //

// main container for the weather page
export const MainContainer = styled.div`
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.5rem;
  max-width: 80%;

  & > * {
    flex-grow: 1; /* Allow the child elements to expand */
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 1rem;
  }
`;

// container for location
export const LocationContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 30rem;
  width: auto;
`;

// current location tag
export const CurrentLocationLabel = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: .5rem;
  color: #101014;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// current location
export const CurrentLocation = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  line-height: .5rem;
  color: #101014;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 70vw;
    height: 35vh;
    margin-left: 0;
  }
`;

export const WeatherInfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 1rem;
`;

export const WeatherInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const WeatherInfoBox = styled.div`
  width: 23rem;
  height: 11.375rem;
  background: #333;
  border-radius: 1rem;
  color: #fff;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 70vw;
    height: 35vh;
    border-radius: 2rem;
  }
`;


// weather info box content
export const Temperature = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
`;

// weather info box content
export const Description = styled.p`
  font-size: 24px;
  margin: 0;
`;

export const WeatherIcon = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`;
