import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.details !== prevProps.details) {
      this.setState({
        showingInfoWindow: false,
      });
    }
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
        initialCenter={
          this.props.details
            ? {
                lat: this.props.details.latitude,
                lng: this.props.details.longitude,
              }
            : {}
        }
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
        <InfoWindow visible={this.state.showingInfoWindow} marker={this.state.activeMarker}>
          {details ? (
            <p style={{ padding: '0' }}>
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

// TODO: Prop types?
MapContainer.propTypes = {
  details: PropTypes.object,
  google: PropTypes.object,
};

// Higher order component - Wraps "GoogleApiWrapper" with our google maps key
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY,
})(MapContainer);
