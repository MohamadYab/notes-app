import { useState, useEffect, useRef } from 'react'
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
  const timerRef = useRef(null);

  const [time, setTime] = useState(new Date());
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    return notes || [];
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function deleteNote(id) {
    console.log(id);
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  }

  function getFormattedTimer(time) {
    const fixZero = (num) => num > 10 ? num : `0${num}`;
    const hours = fixZero(time.getHours());
    const minutes = fixZero(time.getMinutes());
    const seconds = fixZero(time.getSeconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div
      className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'
    >
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Notes App</h2>
        <p className='text-sm text-gray-600'>
          <span className='text-xl'>🕰</span> {getFormattedTimer(time)}
        </p>
      </div>
      <NoteForm
        notes={notes}
        setNotes={setNotes}
      />
      <NotesList
        notes={notes}
        onDelete={deleteNote}
      />
    </div>
  )
}

export default App;