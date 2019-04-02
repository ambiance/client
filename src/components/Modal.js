import React from "react";
import Map from "./Map";
import "../css/Modal.css";

const modal = props => {
  console.log(props);
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(0vh)" : "translateY(-80vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <div className="modal-header">
          <h3>{props.show ? props.details.details.name : ""}</h3>
          <button className="close-modal-btn" onClick={props.close}>
            ×
          </button>
        </div>
        <div className="modal-body">
          {/* <Map /> */}
          <p>{props.show ? props.details.details.displayAddress[0] : ""}</p>
          <p>{props.show ? props.details.details.displayAddress[1] : ""}</p>
          <p>{props.show ? props.details.details.attributes.priceRange : ""}</p>
          <p>{props.show ? props.details.details.stars + " stars" : ""}</p>
          {/* <p>{props.show ? props.details.details.categories : ""}</p> */}
          <a
            className="yelpLink"
            href={props.show ? props.details.details.url : ""}
          >
            Link to Yelp!
          </a>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
};

export default modal;
