import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  countries: {
    country: string;
    countryInfo: { lat: number; long: number };
    cases: number;
    recovered: number;
    deaths: number;
  }[];
}

const Map: React.FC<MapProps> = ({ countries }) => {
  const center: LatLngExpression = [20, 0];

  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country, index) => (
        <Marker
          key={index}
          position={[country.countryInfo.lat, country.countryInfo.long] as LatLngExpression}
        >
          <Popup>
            <div>
              <strong>{country.country}</strong>
              <br />
              Cases: {country.cases}
              <br />
              Recovered: {country.recovered}
              <br />
              Deaths: {country.deaths}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
