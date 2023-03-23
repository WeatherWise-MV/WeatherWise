import React,  { useState } from 'react';
import { Container, HomeLabel, SearchLocationLabel, SearchButton, SettingsButton, WeatherBackground, ContentContainer, SettingsContainer, SettingsText } from '../components/homeComponent';
import { FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();    

    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`/weather?city=${location}`);
    };

    return (
        <WeatherBackground>
            <ContentContainer>
                <HomeLabel>Welcome to WeatherWise - All Things Weather!</HomeLabel>
                <Container>
                    <SearchLocationLabel>Provide location for weather info</SearchLocationLabel>
                    <form onSubmit={handleSearch}>
                        <SearchButton>
                            <input 
                            placeholder="Search location..." 
                            value={location} 
                            onChange={(event) => setLocation(event.target.value)}
                            />

                            <button type="button" onClick={handleSearch}>Search</button>
                        </SearchButton>
                    </form>
                </Container>
                <SettingsButton>
                    <Link to="/settings">
                        <SettingsContainer>
                            <SettingsText>Settings</SettingsText>
                            <FaCog size={32} color="white" />
                        </SettingsContainer>
                    </Link>
                </SettingsButton>
            </ContentContainer>
        </WeatherBackground>
    )
}

export default Home;