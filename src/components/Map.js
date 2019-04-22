import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.markerRef = React.createRef();

    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const { details } = this.props;
    return (
      <Map
        onClick={this.onMapClicked}
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
          ref={this.markerRef}
        />
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
          {details ? (
            <p>
              {details.address}
              <br />
              {details.city}, {details.state} {details.postalCode}
            </p>
          ) : (
            ''
          )}
        </InfoWindow>
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
