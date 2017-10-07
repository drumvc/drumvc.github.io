import React from "react";
import PropTypes from "prop-types";

const Note = props => (
  <div
    className="noteContainer"
    onClick={() => props.toggleActive(props.stave, props.pos)}
  >
    <div className={"note" + (props.active ? " active" : "")} />
  </div>
);

Note.propTypes = {
  stave: PropTypes.number.isRequired,
  transportPos: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired
};

export default Note;
