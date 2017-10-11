import React from "react";
import PropTypes from "prop-types";

const Note = ({ toggleActive, stave, pos, active }) => (
  <div className="noteContainer" onClick={() => toggleActive(stave, pos)}>
    <div className={"note" + (active ? " active" : "")} />
  </div>
);

Note.propTypes = {
  stave: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired
};

export default Note;
