import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Import your custom icon
// import customIconUrl from '';

const center = [51.505, -0.09]; // Coordinates for the map center
const zoom = 1; // Zoom level

const markers = [
  {id: 1, position: [51.505, -0.09], text: "Marker 1"},
  {id: 2, position: [51.515, -0.170], text: "Marker 2"},
  {id: 3, position: [51.525, -0.08], text: "Marker 3"}
];

const customIcon = new L.Icon({
  iconUrl: './marker.png',
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
});

const GoogleMapShow = () => {
  return (
    <MapContainer center={center} zoom={zoom} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map(marker => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>{marker.text}</Popup>
        </Marker>
      ))}
      
    </MapContainer>
  );
};

export default GoogleMapShow;
