import React from 'react';

const Note = (props) => {
  const deleteNote = (e) => {
    props.deleteNote(e.currentTarget.dataset.id)
  }

  return (
    <div className="note-block" key={props.note.id}>
      <span data-id={props.note.id} className="material-symbols-outlined close" onClick={deleteNote}>close</span>
      {props.note.content}
    </div>
  );
};

export default Note;