import React from "react";
import Map from "./Map";
import "../css/Modal.css";
import starImages from './starImages';


const modal = props => {
  console.log(props.show ? props.details.details.stars : 0);
  const starSrc = handleStars(props.show ? props.details.details.stars : 0);
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
          <Map className="modalMap" />
          <p>{props.show ? props.details.details.displayAddress[0] : ""}</p>
          <p>{props.show ? props.details.details.displayAddress[1] : ""}</p>
          <p>{props.show ? props.details.details.attributes.priceRange : ""}</p>
          <p>{props.show ? props.details.details.stars + " stars" : ""}</p>
          <img className="modalStar" src={starSrc}/>
          {/* <p>{props.show ? props.details.details.categories : ""}</p> */}
          <a
            className="yelpLink"
            href={props.show ? props.details.details.url : ""}
            target="_blank"
          >
            Link to Yelp!
          </a>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
};

const handleStars = stars => {
  switch (stars) {
    case 0.5:
      return starImages[12].src;
      break;
    case 1:
      return starImages[13].src;
      break;
    case 1.5:
      return starImages[14].src;
      break;
    case 2:
      return starImages[15].src;
      break;
    case 2.5:
      return starImages[16].src;
      break;
    case 3:
      return starImages[17].src;
      break;
    case 3.5:
      return starImages[18].src;
      break;
    case 4:
      return starImages[19].src;
      break;
    case 4.5:
      return starImages[20].src;
      break;
    case 5:
      return starImages[21].src;
      break;

    default:
      return starImages[11].src;
  }
;}


export default modal;
