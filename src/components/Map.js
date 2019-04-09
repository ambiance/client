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
          (this.props.details ? { lat: this.props.details.latitude } : "",
          this.props.details ? { lng: this.props.details.longitude } : "")
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          initialCenter={
            (this.props.details ? { lat: this.props.details.latitude } : "",
            this.props.details ? { lng: this.props.details.longitude } : "")
          }
        />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>hey</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer);
