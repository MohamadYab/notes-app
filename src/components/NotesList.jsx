import React from 'react'
import Note from './Note';

function NotesList({ notes = [] }) {
  if (notes.length === 0) {
    console.log('no notes');
    
    return (
      <p className="text-center text-gray-500">
        No Notes Yet
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note} 
        />
      ))}
    </div>
  )
}

export default NotesList