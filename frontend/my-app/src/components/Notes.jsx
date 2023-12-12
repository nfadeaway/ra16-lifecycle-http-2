import React from 'react';
import Note from './Note.jsx';

const Notes = (props) => {
  return (
    <div className="notes">
      {props.notes.length > 0 && props.notes.map((note) =>
        <Note note={note} deleteNote={props.deleteNote}/>
      )}
    </div>
  );
};

export default Notes;