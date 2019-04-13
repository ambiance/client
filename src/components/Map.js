import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    console.log(this.props.details ? this.props.details.longitude : "");
    return (
      <Map
        google={this.props.google}
        zoom={14}
        center={
          this.props.details
            ? {
                lat: this.props.details.latitude,
                lng: this.props.details.longitude
              }
            : ""
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          position={
            this.props.details
              ? {
                  lat: this.props.details.latitude,
                  lng: this.props.details.longitude
                }
              : ""
          }
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDjyph6WMcRSUDfFu-tnGiBzn9n5uXlpKc"
})(MapContainer);
