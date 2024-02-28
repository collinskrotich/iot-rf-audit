'use client';

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: -1.2590509187751204, // Replace with your initial latitude , 
  lng: 36.785808141600235, // Replace with your initial longitude
};
const center2 = {
  lat: -1.2583171787508087, // Replace with your initial latitude ,
  lng:  36.78950538310371, // Replace with your initial longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey= {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14} // Adjust the zoom level as needed
      >
        <Marker position={center} />
        {/* You can add more markers as needed */}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;