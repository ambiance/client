import React from "react";

import "../css/Modal.css";

const modal = props => {
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
          <h3>{props.children}</h3>
          <button className="close-modal-btn" onClick={props.close}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>{props.children}</p>
        </div>
        <div className="modal-footer" />
      </div>
    </div>
  );
};

export default modal;
