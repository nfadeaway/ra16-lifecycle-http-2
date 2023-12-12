import React, {useRef} from 'react';

const InputForm = (props) => {
  const refInput = useRef();

  const addNote = () => {
    if (refInput.current.value) {
      props.addNote(refInput.current.value)
      refInput.current.value = ''
    } else {
      alert('Введите текст')
    }
  }

  return (
    <div className="input-form">
      <div className="input-label">New Note</div>
      <input ref={refInput} className="input" type="text"/>
      <span className="btn material-symbols-outlined" onClick={addNote}>send</span>
    </div>
  );
};

export default InputForm;