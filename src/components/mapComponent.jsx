import React, { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styled from 'styled-components';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const StyledMapContainer = styled(MapContainer)`
  width: 90vw;
  height: 45vw;
  max-width: 41.5rem;
  max-height: 20.3125rem;
  line-height: 5px;
  margin-top: 3rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 90vw;
    height: 40vw;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 50vw;
  }
`;


const MapComponent = ({ city }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchCityCoordinates = async () => {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`);
                const data = await response.json();
                if (data && data[0]) {
                    const latitude = parseFloat(data[0].lat);
                    const longitude = parseFloat(data[0].lon);
                    const position = [latitude, longitude];
                    if (mapRef.current) {
                        mapRef.current.leafletElement.setView(position, 13);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (city) {
            fetchCityCoordinates();
        }
    }, [city]);

    const position = [51.505, -0.09]; // Default map center coordinates (London)

    return (
        <StyledMapContainer ref={mapRef} center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {city && <Marker position={position} />}
        </StyledMapContainer>
    );
};

export default MapComponent;
