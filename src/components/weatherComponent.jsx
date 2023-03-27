import styled, { keyframes } from 'styled-components';

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

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 4rem); /* Subtract the height of the navbar from the viewport height */
  padding-top: 4rem; /* Add padding to the top of the container to push it below the navbar */
  background: linear-gradient(45deg, #3465d9, #3f86ed, #4ba8ff, #5fd5ff, #a4f4ff);
  background-size: 400% 400%;
  animation: ${animateBackground} 15s ease infinite;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 1rem;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    color: #f4f4f4;
    background-color: #555;
    height: 100%;
  }
`;

export const SearchBar = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const LocationName = styled.span`
  font-size: 5rem;
  font-weight: bold;
  margin: 0;
`;

export const Temperature = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 24px;
  margin: 0;
`;

