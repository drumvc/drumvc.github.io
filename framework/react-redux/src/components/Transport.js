import React from "react";
import PropTypes from "prop-types";
import TransportBlank from "./TransportBlank";

const Transport = props => (
  <div className="transportContainer">
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <TransportBlank />
    <div className="transport">
      <div
        className="transportLight transportLightActive"
        style={{ left: props.pos * 95 + "px" }}
      />
    </div>
  </div>
);

Transport.propTypes = {
  pos: PropTypes.number.isRequired
};

export default Transport;
