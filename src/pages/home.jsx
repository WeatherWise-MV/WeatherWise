import React,  { useState, useEffect } from 'react';
import { Container, HomeLabel, SearchLocationLabel, SearchButton, SettingsButton, WeatherBackground, ContentContainer, Glow } from '../components/homeComponent';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
    const [location, setLocation] = useState('');

    return (
        <WeatherBackground>
            <ContentContainer>
                <HomeLabel>Welcome to WeatherWise - All Things Weather!</HomeLabel>
                <Container>
                    <SearchLocationLabel>Provide location for weather info</SearchLocationLabel>
                    <SearchButton>
                        <input placeholder="Search location..." value={location} onChange={(event) => setLocation(event.target.value)}/>
                        <button type="submit"}>Search</button>
                    </SearchButton>
                </Container>
                <SettingsButton>
                        <Link to="/settings">
                            <FaCog size={32} color="white"/>
                        </Link>
                </SettingsButton>
            </ContentContainer>        
        </WeatherBackground>
    )
}

export default Home;