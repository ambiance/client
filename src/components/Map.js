import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React from "react";

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

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

// ===============================================================================================================================

// import React from "react";
// import ReactDOM from "react-dom";

// class Map extends React.Component {
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }

//   componentDidMount() {
//     this.loadMap();
//   }

//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const { google } = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let zoom = 14;
//       let lat = 37.774929;
//       let lng = -122.419416;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign(
//         {},
//         {
//           center: center,
//           zoom: zoom
//         }
//       );
//       this.map = new maps.Map(node, mapConfig);
//     }
//     // ...
//   }

//   render() {
//     return <div ref="map">Loading map...</div>;
//   }
// }

// export default Map;

// =======================================================================================================================

// import React from "react";
// import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";

// class Map extends React.Component {
//   //   constructor() {
//   //       super(props)

//   //     this.props = {
//   //         latitude = props.details.latitude;
//   //         longitude = props.details.longitude;
//   //     }
//   //   }
//   myIcon = L.icon({
//     iconUrl: "https://img.icons8.com/material/4ac144/256/user-male.png"
//   });

//   render() {
//     if (!this.props.details) return "";
//     const { latitude, longitude } = this.props.details;
//     console.log("Latitude", this.props.details.latitude);
//     return (
//       <LeafletMap
//         center={[latitude, longitude]}
//         zoom={13}
//         maxZoom={16}
//         doubleClickZoom={false}
//         scrollWheelZoom={false}
//         dragging={false}
//         animate={true}
//         easeLinearity={0.35}
//       >
//         <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
//         <Marker position={[latitude, longitude]} icon={this.myIcon} />
//       </LeafletMap>
//     );
//   }
// }

// export default Map;
