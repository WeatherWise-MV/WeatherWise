import React,  { useState, useEffect } from 'react';
import { Container, HomeLabel, SearchLocationLabel, SearchButton, WeatherBackground } from '../components/homeComponent';

function Home() {
    return (
        <WeatherBackground>
            <Container>
                <HomeLabel>WeatherWise</HomeLabel>
                <SearchLocationLabel>Enter Location for Weather Information</SearchLocationLabel>
                <SearchButton>
                    <input placeholder = "Search location..."/>
                    <button type={"submit"}>Search</button>
                </SearchButton>
            </Container>
        </WeatherBackground>
    )
}

export default Home;