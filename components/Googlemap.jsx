'use client';

import React, { createContext, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '500px',
};

const center = {
  lat: -1.49, // Replace with your initial latitude , 
  lng: 36.97, // Replace with your initial longitude
};

const Googlemap = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust the zoom level as needed
      >
        <Marker
          position={center}
          onHover={() => setSelectedMarker(center)}
        />

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h2>Marker Summary</h2>
              <p>Additional information about the marker goes here.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Googlemap;
