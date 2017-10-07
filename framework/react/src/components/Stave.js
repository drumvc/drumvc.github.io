import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const Stave = props => (
  <div className="stave">
    <div className="staveName">{props.name}</div>
    {props.notes.map(function(note, index) {
      return (
        <Note
          key={index}
          stave={props.id}
          transportPos={props.transportPos}
          pos={note.pos}
          active={note.active}
          toggleActive={props.toggleActive}
        />
      );
    })}
  </div>
);

Stave.propTypes = {
  id: PropTypes.number.isRequired,
  toggleActive: PropTypes.func.isRequired,
  transportPos: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      pos: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired
};

export default Stave;
