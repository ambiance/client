import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        center={
          this.props.details
            ? {
                lat: this.props.details.latitude,
                lng: this.props.details.longitude,
              }
            : {}
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name="Current location"
          position={
            this.props.details
              ? {
                  lat: this.props.details.latitude,
                  lng: this.props.details.longitude,
                }
              : {}
          }
        />
      </Map>
    );
  }
}

MapContainer.propTypes = {
  details: PropTypes.object,
  google: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjyph6WMcRSUDfFu-tnGiBzn9n5uXlpKc',
})(MapContainer);
