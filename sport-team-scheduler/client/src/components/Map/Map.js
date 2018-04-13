import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className="map" style={{ height: `300px`, width: '300px' }} />,
    containerElement: <div className="map" style={{ height: `300px`, width: '300px', position: 'absolute', top: '250px', left: '250px' }} />,
    mapElement: <div className="map" style={{ height: `300px`, width: '300px' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 33.415184, lng: -111.831472 }}
  >
  <Marker 
  position={{ lat: 33.415184, lng: -111.831472 }} 
  />
  </GoogleMap>
)


export default MyMapComponent;