import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

class Map extends React.Component {
  //   constructor() {
  //       super(props)

  //     this.props = {
  //         latitude = props.details.latitude;
  //         longitude = props.details.longitude;
  //     }
  //   }
  myIcon = L.icon({
    iconUrl: "https://img.icons8.com/material/4ac144/256/user-male.png"
  });

  render() {
    if (!this.props.details) return "";
    const { latitude, longitude } = this.props.details;
    console.log("Latitude", this.props.details.latitude);
    return (
      <LeafletMap
        center={[latitude, longitude]}
        zoom={13}
        maxZoom={16}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        dragging={false}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} icon={this.myIcon} />
      </LeafletMap>
    );
  }
}

export default Map;
