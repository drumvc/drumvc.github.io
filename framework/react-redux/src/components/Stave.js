import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

const Stave = ({ name, notes, id, transportPos, toggleActive }) => (
  <div className="stave">
    <div className="staveName">{name}</div>
    {notes.map((note, index) => 
        <Note
          key={index}
          stave={id}
          transportPos={transportPos}
          pos={note.pos}
          active={note.active}
          toggleActive={toggleActive}
        />
      )}
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
