import './App.css'
import Notes from './components/Notes.jsx';
import {useEffect, useState} from 'react';
import InputForm from './components/InputForm.jsx';

const URL = 'http://localhost:7071/'

function App() {
  const [notes, setNotes] = useState([])

  async function getData() {
    let response = await fetch(URL + 'notes')
    response = await response.json();
    setNotes(response)
  }

  async function deleteData(id, parrent) {
    const response = await fetch(URL + 'notes/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const result = await response
    result.status === 204 && getData()
  }

  async function postData(content) {
    const response = await fetch(URL + 'notes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: 0, content: content})
    })
    const result = await response
    result.status === 204 && getData()
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="app">
      <div className="title-block">
        <div className="title">Notes</div>
        <div className="refresh-background" onClick={getData}><span className="refresh material-symbols-outlined">autorenew</span></div>
      </div>
      <Notes notes={notes} deleteNote={deleteData}/>
      <InputForm addNote={postData}/>
    </div>
  )
}

export default App