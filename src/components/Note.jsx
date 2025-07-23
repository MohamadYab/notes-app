import React from 'react'

function Note({ note }) {
  return (
    <div
      className='p-4 bg-white rounded-lg shadow-md border-l-4'
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority:</strong> {note.priority}
      </p>
      <p className="mt-2">{note.description}</p>
    </div>
  )
}

export default Note