import { useState } from 'react'

const initialFormData = {
  title: '',
  priority: 'Medium',
  category: 'Work',
  description: ''
}

function NoteForm({ notes = [], setNotes}) {
  const [formData, setFormData] = useState(initialFormData);
  const [isFormVisible, setIsFormVisible] = useState(false);

  function handleChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title || !formData.description) return;
    const newNote = {
      id: Date.now(),
      ...formData
    }
    setNotes([newNote, ...notes]);
    resetFormData();
  }

  const resetFormData = () => setFormData(initialFormData);

  return (
    <>
      <button
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        { isFormVisible ? 'Collapse' : 'Expand' } Notes Form { isFormVisible ? '➖' : '➕' }
      </button>
      { isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block font-semibold"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="priority"
              className="block font-semibold"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block font-semibold"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Ideas">Ideas</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-semibold"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">
            Add Note
          </button>
        </form>
      )}
    </>
  )
}

export default NoteForm;