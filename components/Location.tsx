'use client'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const Location = () => {
  const position = {lat: 19.927, lng: -99.1453216};
  const google_maps_key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return (
    <APIProvider apiKey={google_maps_key || ""}>
      <Map defaultCenter={position} defaultZoom={15}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}

export default Location;